class Watcher {
  // 进行监听数据是否发生变化
  constructor(vm, expr, cb) {
    this.vm = vm;
    this.expr = expr;
    this.cb = cb;
    this.oldVal = this.getOldVal();
  }
  getOldVal() {
    Dep.target = this; // 将dep和watcher关联起来，挂载起来
    const oldVal = compileUtil.getVal(this.expr, this.vm);
    Dep.target = null; // 防止太多的观察者 ,数据建立的时候建立watcher,改完了就立马删掉watcher
    return oldVal;
  }
  // 判断新旧是否发生了变化
  update() {
    const newVal = compileUtil.getVal(this.expr, this.vm);
    if (newVal !== this.oldVal) {
      // 确定更新了，那么回调执行更新操作
      this.cb(newVal);
    }
  }
}

class Dep {
  constructor() {
    this.subs = [];
  }
  // 收集watcher
  addSub(watcher) {
    this.subs.push(watcher);
  }

  //通知观察者去更新即执行，相当于$.fire
  notify() {
    console.log("通知了观察者");
    this.subs.forEach((w) => w.update());
  }
}

// 监听和劫持所有属性
class Observer {
  constructor(data) {
    this.observe(data);
  }

  observe(data) {
    if (data && typeof data === "object") {
      Object.keys(data).forEach((key) => {
        this.DefineReactive(data, key, data[key]);
      });
    }
  }

  DefineReactive(obj, key, value) {
    // value == obj[key]
    // 递归遍历
    this.observe(value);
    // 数据劫持时创建依赖收集器
    const dep = new Dep();
    // 劫持并监听所有的属性
    Object.defineProperty(obj, key, {
      enumerable: true, // 是否可变
      configurable: false, // 是否可更改编写
      get() {
        // 初始化
        // 添加观察对象入依赖收集器中，相当于订阅-观察者模式的事件池
        Dep.target && dep.addSub(Dep.target);
        // 订阅数据变化时，往Dep里添加观察
        return value;
      },
      set: (newVal) => {
        // 对更改的数据也添加监听
        this.observe(newVal);
        if (newVal !== value) {
          value = newVal;
        }
        // 数据变化通知变化
        dep.notify();
      },
    });
  }
}
