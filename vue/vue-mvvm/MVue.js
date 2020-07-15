const compileUtil = {
  getVal(expr, vm) {
      return expr.split('.').reduce((data, currentVal) => {
          return data[currentVal]
      }, vm.$data)
  },
  setVal(expr, vm, newVal) {
      return expr.split('.').reduce((data, currentVal) => {
          data[currentVal] = newVal;
      }, vm.$data)
  },
  getContentVal(expr, vm) {
      return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
          return this.getVal(args[1], vm)
      })
  },
  text(node, expr, vm) { // expr:msg, person.name ; vm数据
      let value;
      if (expr.indexOf('{{') !== -1) {
          value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {

              // 绑定观察者，将来数据发生回调，触发更新
              new Watcher(vm, args[1], () => {
                  // 重新获取值
                  this.updater.textUpdater(node, this.getContentVal(expr, vm));
              });
              return this.getVal(args[1], vm)
          });
      } else {
          value = this.getVal(expr, vm);
      }

      this.updater.textUpdater(node, value);
  },
  html(node, expr, vm) {
      const value = this.getVal(expr, vm);
      new Watcher(vm, expr, newVal => {
          this.updater.htmlUpdater(node, newVal)
      });
      this.updater.htmlUpdater(node, value)
  },
  model(node, expr, vm) {
      const value = this.getVal(expr, vm);
      new Watcher(vm, expr, newVal => {
          this.updater.modelUpdater(node, newVal);
      });
      node.addEventListener('input', e => {
          this.setVal(expr, vm, e.target.value)
      });
      this.updater.modelUpdater(node, value);
  },
  on(node, expr, vm, event) {
      let fn = vm.$options.methods && vm.$options.methods[expr];
      node.addEventListener(event, fn.bind(vm), false)
  },
  bind(node, expr, vm, attrName) {
      node[attrName] = this.getVal(expr, vm);
  },
  updater: {
      textUpdater(node, value) {
          return node.textContent = value
      },
      htmlUpdater(node, value) {
          return node.innerHTML = value;
      },
      modelUpdater(node, value) {
          return node.value = value
      },
  }
};

class Compile {
  constructor(el, vm) {
      this.el = this.isElementNode(el) ? el : document.querySelector(el);
      this.vm = vm;
      // 1、获取文档碎片对象，放入内存中，减少页面重绘和回流
      const fragment = this.node2Fragment(this.el);
      // console.log(fragment);
      // 2、编译模板
      this.compile(fragment);
      // 3、追加子元素到根节点
      this.el.appendChild(fragment);

  }

  compile(fragment) {
      // console.log(fragment);
      fragment.childNodes.forEach(child => {
          // 元素节点
          if (this.isElementNode(child)) {
              // console.log("元素节点:",child);
              // 编译元素节点
              this.compileElement(child);
          } else {//文本节点
              // 处理双括号
              // console.log("文本节点:",child);
              this.compileText(child);
          }
          if (child.childNodes && child.childNodes.length) {
              this.compile(child);
          }
      })
  }

  compileElement(node) {
      const attributes = node.attributes;
      [...attributes].forEach(attr => {
          // console.log(attr);
          const {name, value} = attr; // value person.age,msg
          // 区分指令v-和普通属性
          if (this.isDirective(name)) {// 是一个指令v-text,v-model,v-html,v-on:click,v-bind:src,:src
              const [, directive] = name.split('-'); // text,model,on-click
              const [dirName, eventName] = directive.split(':');// v-on:click
              compileUtil[dirName](node, value, this.vm, eventName)
              node.removeAttribute(name);
          }
          // 处理:src=""
          if (this.isBind(name)) {
              const [, attrName] = name.split(":");
              compileUtil['bind'](node, value, this.vm, attrName);
              node.removeAttribute(name);
          }
          // 处理@click="clickMe"
          if (this.isEventName(name)) {
              const [, eventName] = name.split('@');
              compileUtil['on'](node, value, this.vm, eventName)
          }
      });

  }

  compileText(node) {
      var reg = /\{\{(.*)\}\}/;
      if (reg.test(node.textContent)) {
          compileUtil['text'](node, node.textContent, this.vm)
      }
  }

  isDirective(name) {
      return name.startsWith('v-');
  }

  isBind(name) {
      return name.startsWith(':');
  }

  isEventName(name) {
      return name.startsWith('@')
  }

  node2Fragment(el) {
      // 创建文档碎片,使用这个的好处是使用文档片段通常会带来更好的性能，不会引起页面重绘
      const f = document.createDocumentFragment();
      let firstChild;
      while (firstChild = el.firstChild) {
          f.appendChild(firstChild);
      }
      return f;
  }

  isElementNode(node) {
      return node.nodeType === 1;
  }

  isTextNode(node) {
      return node.nodeType === 3;
  }

}

class MVue {
  constructor(options) {
      // console.log(this)

      this.$el = options.el;
      this.$data = options.data;
      this.$options = options;
      if (this.$el) {
          // 1、实现一个指令观察者

          new Observer(this.$data);
          // 2、实现一个指令解析器
          new Compile(this.$el, this);

          this.proxyData(this.$data);
      }
  }
  // 将this.$data代理成为this
  proxyData(data){
      for (const key in data){
          // 当你调用this.key时，就返回data[key]
          Object.defineProperty(this,key,{
              get(){
                  return data[key]
              },
              set(newVal) {
                  console.log(newVal)
                  data[key] = newVal
              }
          })
      }
  }
}