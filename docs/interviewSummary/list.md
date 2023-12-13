## 2023 12月

### 上海朋熙半导体

### 一面
开始: 自我介绍

#### css 
##### css 继承?
1. 字体属性（font）
2. 文本属性（text）
3. 颜色属性（color）
4. 列表属性（list）
5. 表格属性（table）
6. 边框属性（border）
7. 背景属性（background）
8. 元素的可见性属性（visibility）
9. 元素的透明度属性（opacity）
10. 元素的文本装饰属性（text-decoration）
11. 元素的文本转换属性（text-transform）
12. 元素的文本对齐属性（text-align）
13. 元素的文本缩进属性（text-indent）
14. 元素的文本行高属性（line-height）
15. 元素的文本字间距属性（letter-spacing）
16. 元素的文本单词间距属性（word-spacing）
17. 元素的文本换行属性（word-wrap）
18. 元素的文本溢出属性（text-overflow）
19. 元素的文本换行方式属性（white-space）
20. 元素的文本溢出方式属性（overflow-wrap）
##### css 如何隐藏元素?

**完全隐藏的方法 (元素 Dom 节点会从渲染树消失，更不会占据空间，也不可被点击触发 click 事件)**

- 设置`display属性为 none`，这样元素就被完全隐藏了。
- 这是 `HTML5` 新增属性，相当于`display: none`，直接写在元素上面，如`<div hidden></div>`

**视觉上隐藏：元素依旧占据着位置，只是我们视觉上看不见而已, 但也可能会触发click事件**
- `opacity`属性作用于元素时，会将元素和其内容当作一个整体，从而设置整体的透明度，还可与` transition` 搭配使用，从而达到一个动态变化的效果。
`opacity:0`；将元素整体透明度设置为 0，视觉上就会变得不可见，但依旧占据空间，而且可以被点击触发 click 事件

- `visibility` 属性可控制元素的显示与隐藏，且不更改文档的布局，依旧占据空间，但当`visibility:hidden`时不可点击触发 `click `事件。

**其他 css 属性方法**

**绝对定位**

- 设置 `posoition 为 absolute 或 fixed`，再通过设置` top、left `等值，将其移出可视区域
```css
position: absolute;
left: -999px;
top: -999px;
```
**设置 margin**

- 通过设置` margin `值，将其移出可视区域范围（可视区域占位）。如：`margin-left: -99999px`;

**设置宽高为 0**
- 将元素的 `margin、border、padding、height 和 width` 等影响元素盒模型的属性设为 0。 如果元素内有子元素或内容，就设置其 `overflow:hidden` 来隐藏其子元素

```css
width: 0px;
height: 0px;
overflow: hidden; /*隐藏子元素*/

```

**裁剪元素**
- 通过`clip-path`属性来剪裁元素，但这个属性比较新，浏览器兼容性比较差，了解一下即可
```css
clip-path: polygon(0px 0px, 0px 0px, 0px 0px, 0px 0px);

```

##### 分析比较 opacity: 0、visibility: hidden、display: none 的区别和优劣。?


- `display:none;` : 会让元素完全从渲染树中消失，渲染的时候不占据任何空间, 不能点击。
- `visibility: hidden; `：不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，不能点击。
- `opacity: 0; `: 不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见，可以点击。


继承性：


- `display 和 opacity` 属性是非继承属性。

- `display: none` 元素的子孙节点消失的原因: 父元素从渲染树消失造成，从而子孙节点也无法显示。
- `opacity: 0` 元素的子孙节点消失的原因: `opacity` 属性会将元素和其内容当作一个整体来进行控制。

`visibility `属性是继承属性。

- `visibility: hidden` 元素的子孙节点消失的原因是：子孙节点继承了 `visibility: hidden`。
我们可通过设置` visibility: visible;`可以让子孙节点显式。


性能：

- `display: none;` : 修改元素会造成整个文档的回流，性能消耗较大 。
- `visibility:hidden`: 修改元素会造成重绘,性能消耗较少。
- `opacity: 0 `： 修改元素会造成重绘，性能消耗较少。


##### z-index 如何隐藏元素,原理是什么?
要隐藏元素，可以使用 `z-index` 属性。`z-index` 属性用于控制元素的堆叠顺序，即元素在层叠上下文中的显示顺序。

要隐藏元素，可以将其 `z-index` 设置为较低的值，比如负数。这样，被隐藏的元素就会被放置在其他元素的下方，从而实现隐藏效果。

例如，可以使用以下 CSS 代码隐藏一个元素：

```css
.element {
  z-index: -1;
}
```

这样设置后，该元素就会被放置在其他具有正数 `z-index` 值的元素下面，从而隐藏起来。

#### HTML5
##### 有哪些新增?
1. 新增的语义化标签（如`<header>、<footer>、<article>、<section>`等）
2. 新的表单元素（如`<input type="date">、<input type="email">`等）
3. 视频和音频元素（`<video>和<audio>`）
4. 画布元素（`<canvas>`）
5. 本地存储（`localStorage和sessionStorage`）
6. 地理位置API（`Geolocation`）
7. 历史管理API（`history`）
8. 拖放API（`Drag and Drop`）
9. `Web Worker`（在后台运行的`JavaScript`）
10. `WebSocket`（实现了基于浏览器的远程`Socket`）

##### localStore 的缺点?
1. 有限的存储空间：localStore 的存储空间是有限的，通常只能存储几十兆字节的数据。对于大型应用程序或需要存储大量数据的应用来说，这可能会成为一个限制。

2. 安全性问题：localStore 存储在客户端，因此可能会受到安全攻击。如果存储了敏感信息，如用户凭据或个人信息，可能会面临数据泄露的风险。

3. 跨域限制：localStore 存储的数据只能在同一域名下访问，跨域访问会受到限制。这可能会对一些需要在不同域名下共享数据的应用造成困扰。

4. 不适合长期存储：localStore 通常用于临时存储数据，不适合长期存储。如果需要长期存储数据，可能需要考虑其他方案，如数据库或云存储。

5. 对于某些浏览器可能不支持：虽然大多数现代浏览器都支持 localStore，但仍有一些旧版本的浏览器可能不支持或支持不完全，这可能会影响应用的兼容性。

##### prefect 和 preload 区别?

`<link rel="prefetch">`和`<link rel="preload">`是用于优化网页加载性能的HTML标签，它们的区别如下：

- `<link rel="prefetch">`：用于指示浏览器在空闲时间预加载资源。它告诉浏览器在当前页面加载完成后，开始异步下载指定的资源，以备将来使用。它适用于那些可能在用户后续浏览中需要的资源，但不是当前页面必需的资源。预加载资源的优先级较低，不会影响当前页面的加载速度。
  
- `<link rel="preload">`：用于指示浏览器在页面加载过程中立即加载资源。它告诉浏览器在当前页面加载时，优先级较高地加载指定的资源。这对于那些当前页面必需的关键资源非常有用，可以提前加载并减少后续请求的延迟。预加载资源的优先级较高，可以对当前页面的加载速度产生影响。

总结来说，`<link rel="prefetch">`用于异步预加载未来可能需要的资源，而`<link rel="preload">`用于立即加载当前页面必需的关键资源。根据具体情况选择使用哪种方式可以更好地优化网页加载性能。

#### js
##### js 继承?
在 JavaScript 中，有多种实现继承的方式，以下是几种常见的继承方式及其代码示例：

1. 原型链继承：
```javascript
function Parent() {
  this.name = 'Parent';
}

Parent.prototype.sayHello = function() {
  console.log('Hello, I am ' + this.name);
};

function Child() {
  this.name = 'Child';
}

Child.prototype = new Parent();

var child = new Child();
child.sayHello(); // 输出：Hello, I am Child
```

2. 构造函数继承（经典继承）：
```javascript
// 父类构造函数
function Animal(name) {
  this.name = name;
}

// 子类构造函数
function Dog(name, breed) {
  // 使用call方法调用父类构造函数，将this绑定到子类实例上
  Animal.call(this, name);
  this.breed = breed;
}

// 创建一个Animal实例
var myAnimal = new Animal('Tom');

// 创建一个Dog实例
var myDog = new Dog('Buddy', 'Golden Retriever');

console.log(myAnimal.name); // 输出：Tom
console.log(myDog.name); // 输出：Buddy
console.log(myDog.breed); // 输出：Golden Retriever
```

3. 组合继承（原型链继承 + 构造函数继承）：
```javascript
function Parent() {
  this.name = 'Parent';
}

Parent.prototype.sayHello = function() {
  console.log('Hello, I am ' + this.name);
};

function Child() {
  Parent.call(this);
  this.name = 'Child';
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child = new Child();
child.sayHello(); // 输出：Hello, I am Child
```

4. 原型式继承：
```javascript
function createObject(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

var parent = {
  name: 'Parent',
  sayHello: function() {
    console.log('Hello, I am ' + this.name);
  }
};

var child = createObject(parent);
child.name = 'Child';
child.sayHello(); // 输出：Hello, I am Child
```

##### this 的理解?

##### 如何实现 call, apply?
##### promise 如何终止?

在JavaScript中，Promise是一种用于处理异步操作的对象，它代表了一个异步操作的最终完成或失败，并且其返回值可能未决。通常情况下，Promise是不可取消的，一旦创建就会一直执行直到最终完成或失败。

然而，可以通过一些技巧来实现Promise的终止。
1. 一种方法是使用一个标志变量来控制Promise的执行，当标志变量为true时，Promise继续执行，当标志变量为false时，Promise终止执行。
2. 另一种方法是使用Promise.race()方法，它可以接受一个包含多个Promise对象的数组作为参数，返回一个新的Promise对象，当数组中的任意一个Promise对象完成或失败时，新的Promise对象也会相应地完成或失败。

3. 另外，可以使用第三方库或工具来实现Promise的终止，例如使用RxJS库中的takeUntil()方法来实现Promise的终止。

##### typeof, instanceof 区别?
`typeof`和`instanceof`是JavaScript中用于检测数据类型的操作符，它们之间有一些区别。

- `typeof`用于检测一个值的数据类型，返回一个表示数据类型的字符串。例如，`typeof 42`将返回字符串`"number"`，`typeof "Hello"`将返回字符串`"string"`。它适用于基本数据类型和函数。

- `instanceof`用于检测一个对象是否属于某个特定类或构造函数的实例。它返回一个布尔值，表示对象是否是该类的实例。例如，`obj instanceof Array`将返回`true`，如果`obj`是一个数组的实例。它适用于检测对象的实例关系。

总结来说，`typeof`用于检测数据类型，而`instanceof`用于检测对象的实例关系。


#### vue
##### vue3 有哪些更新?
[vue3 有哪些更新](https://sanlangguo.github.io/learn-notes/vue/v2-v3.html)
##### vue 如何实现继承?
在Vue中，可以通过使用`extend`方法来实现继承。具体步骤如下：

1. 创建一个基础组件，作为父组件。
2. 使用`Vue.extend`方法创建一个新的子组件，并将其设置为父组件的扩展。
3. 在子组件中，可以通过`extends`选项指定父组件，从而继承父组件的属性和方法。
4. 最后，可以使用子组件进行开发和使用。

下面是一个简单的示例代码：

```javascript
// 父组件
const ParentComponent = Vue.extend({
  data() {
    return {
      message: 'Hello, I am the parent component!'
    };
  },
  methods: {
    greet() {
      console.log(this.message);
    }
  }
});

// 子组件
const ChildComponent = Vue.extend({
  extends: ParentComponent,
  mounted() {
    this.greet(); // 调用父组件的方法
  }
});

// 创建子组件实例
const child = new ChildComponent();
child.greet(); // 输出：Hello, I am the parent component!
```

通过以上步骤，你可以在Vue中实现组件的继承。请注意，Vue的继承是基于原型链的，子组件会继承父组件的属性和方法，并且可以通过扩展和覆盖来进行自定义。

##### pinia 和 vuex 区别?
`Pinia和Vuex`是两种用于状态管理的JavaScript库。它们有一些区别：

1. 语法：`Pinia`是基于`Vue 3`的新一代状态管理库，它使用了`Vue 3`的`Composition API`。而`Vuex是Vue 2`的官方状态管理库，使用了`Vue 2的Options API`。

2. 性能：由于`Pinia`是基于`Vue 3`的`Composition API`构建的，它在性能方面可能比Vuex更优秀。`Composition` API提供了更灵活和高效的状态管理方式。

3. 类型支持：`Pinia`在类型支持方面更强大。它使用TypeScript来提供更好的类型推导和类型检查。而`Vuex`在Vue 2中对TypeScript的支持相对较弱。

4. 生态系统：由于`Vuex是Vue 2`的官方状态管理库，因此它有着更庞大和成熟的生态系统。相比之下，`Pinia`作为较新的库，其生态系统可能相对较小。

`pinia 同时支持Vue 2 和Vue 3`, 选择Pinia还是Vuex取决于项目需求和技术栈。如果正在使用Vue 3并且需要更好的类型支持和性能，那么`Pinia`可能是一个不错的选择。如果正在使用Vue 2或者需要一个成熟的生态系统，那么Vuex可能更适合。

**场景问答**?

1. 多个 loading ,多个 http 请求, axios 如何在数据加载完后, 同时取消 多个loading

**前端工程化**?

1. 前端如何做优化

结束: 有什么问题要问的


### 二面

开始: 自我介绍


##### 项目经验**

##### qiankun 如何解决内存泄露?

1. 清理子应用资源：在子应用卸载时，确保正确地清理子应用所使用的资源，包括事件监听器、定时器等。避免未清理的资源导致内存泄漏。

   ```javascript
   /**
    * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
    */
   export async function unmount () {
     instance.$destroy()
     instance.$el.innerHTML = ''
     instance = null
     router = null
   }
   ```

   

2. 监控和分析：使用工具对应用进行监控和分析，及时发现和定位内存泄漏问题。可以使用 `Chrome` 开发者工具的` Memory `面板来检测内存使用情况，并通过` Heap Snapshot` 分析内存泄漏的原因。

##### 如何解决跨域?
前端可以通过以下几种方式解决跨域问题：

1. `JSONP`：利用 script 标签没有跨域限制的特点，通过动态创建 `script` 标签，将需要获取的数据作为参数传递到服务器端，服务器端再将数据放在回调函数中返回给前端。缺点是只支持` GET` 请求。

2. `CORS`：跨域资源共享，可以在服务端设置响应头，允许指定的域名访问该资源。需要服务端的支持。

3. 代理：前端通过自己的服务器请求数据，再将数据返回给前端，相当于前端与后端之间多了一层代理服务器。缺点是需要自己搭建服务器。

4. `WebSocket`：利用` WebSocket` 协议进行通信，`WebSocket `协议没有跨域限制。缺点是需要服务端支持 `WebSocket` 协议。

##### 多个窗口如何传参
1. URL参数传递：在打开新窗口时，可以通过URL参数传递需要的参数信息，例如：`window.open('newWindow.html?param1=value&m2=value2')`，在新窗口中可以通过`location.search`获取参数值。
2. `localStorage或sessionStorage`：可以使用`localStorage或sessionStorage`存储需要传递的参数信息，然后在新窗口中通过`localStorage.getItem或sessionStorage.getItem`获取参数值。
3. `postMessage`：可以使用`postMessage`方法在不同窗口之间进行消息传递，例如：`window.postMessage(data, targetOrigin)`。在接收窗口中可以通过监听message事件来获取传递的参数信息。
4. `SharedWorker`：这是HTML5的一个特性，它可以让多个窗口、标签页或者`iframes`共享同一个`JavaScript Worker`。

##### http 复杂请求的理解, 为什么触发复杂请求?
[说说对 options 请求的理解](https://mp.weixin.qq.com/s?__biz=Mzg4MTYwMzY1Mw==&mid=2247496420&idx=1&sn=9fa779095ccb3309a09e1931dea275ce&source=41#wechat_redirect)

##### app 容器化前端包如何防止拦截包?

##### 中台项目如何做的优化?

##### 为什么使用qiankun?

##### 如何检测 app 离线包的性能?

app 原生监听 webView 提供的事件 ,上传具体的体检

##### jsbrige 原理, 如何触发回调?

首先，有一个概念要明白，例如访问`http://coding.m.juejin.com/classindex.html的时候`，服务器端就一定有一个`classindex.html文件`吗？—— 不一定，服务器可以拿到这个请求，动态生成一个文件，然后返回。 同理，`<script src="http://coding.m.juejin.com/api.js">`也不一定加载一个服务器端的静态文件，服务器也可以动态生成文件并返回。OK，接下来正式开始。
例如我们的网站和掘金网，肯定不是一个域。我们需要掘金网提供一个接口，供我们来获取。首先，我们在自己的页面这样定义

``` js 
<script>
window.callback = function (data) {
    // 这是我们跨域得到信息
    console.log(data)
}
</script>
```
然后掘金网给我提供了一个`http://coding.m.juejin.com/api.js`，内容如下（之前说过，服务器可动态生成内容）

```
callback({x:100, y:200})
```

最后我们在页面中加入

```
<script src="http://coding.m.juejin.com/api.js"></script
```



##### 移动端如何做真机调试, v-console 如何做断点
##### 动画有哪些?

主要有下面两种方式：`Transition `和 `Animation`。

1. `Transition`（过渡）：`Transition` 是元素从一个状态平滑过渡到另一个状态的效果。你需要定义应用过渡效果的 CSS 属性和过渡的持续时间

2. `Animation`（动画）：`Animation` 可以在 CSS 中创建复杂的、多步骤的动画效果。你需要通过`@keyframes `规则定义动画的各个阶段

##### 结束: 有什么问题要问的