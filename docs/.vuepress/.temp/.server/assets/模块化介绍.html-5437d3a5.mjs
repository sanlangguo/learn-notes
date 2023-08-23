import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.696937cd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="commonjs-规范" tabindex="-1"><a class="header-anchor" href="#commonjs-规范" aria-hidden="true">#</a> CommonJS 规范</h3><p>CommonJS 规范是一种用于 JavaScript 应用程序的模块化规范，最初是为服务器端 JavaScript 开发设计的。该规范定义了一种用于模块加载和导出的 API，以及模块的基本结构。CommonJS 规范的目的是提供一种简单、一致的方式来组织模块化代码，以便于代码的重用和维护。</p><p><strong>CommonJS 规范主要有以下三个部分：</strong></p><ol><li>模块引用（require）：用于加载模块，类似于 Java 的 import 或 C 语言的 include。</li><li>模块定义（exports）：用于导出模块的接口，类似于 Java 的 public 或 C 语言的 extern。</li><li>模块标识（module）：用于获取当前模块的信息，例如当前模块的文件名、路径等。在 CommonJS 规范下，每个模块都是一个单独的文件，模块中的代码只有被 require 函数引用时才会执行。在模块中定义的变量、函数和对象都是私有的，只有通过 exports 对象暴露出来的才能被其他模块访问到。Node.js 采用 CommonJS 规范实现模块化，使得 Node.js 开发者可以更加方便地管理代码，提高代码的复用性和可维护性。同时，Node.js 也支持 ES6 模块化规范，开发者可以根据实际需求选择合适的规范。</li></ol><p><strong>CommonJS 具有以下特点：</strong></p><ol><li><p>语法简单：通过 module.exports 和 require() 函数可以方便地导出和导入模块，不需要像 AMD 规范那样定义 define 函数。</p></li><li><p>动态加载：CommonJS 规范采用同步加载模块的方式，即在代码执行前先加载所有的依赖模块，适用于服务器端的 JavaScript 应用。</p></li><li><p>作用域独立：每个模块都运行在一个独立的作用域中，模块中定义的变量、函数和对象只在本模块中可见，不会污染全局命名空间。</p></li><li><p>引用方式简单：CommonJS 规范支持直接导入模块的全部内容，也可以通过解构赋值的方式导入模块的部分内容。</p></li></ol><p><strong>CommonJS 模块化有以下两种导出方式：</strong></p><ul><li>module.exports 导出方式：使用 module.exports 指定一个变量、函数或对象作为模块的导出内容，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导出一个变量
module.exports.myVariable = 100;
// 导出一个函数
module.exports.myFunction = function() { ... };
// 导出一个对象
module.exports.myObject = {
  name: &quot;张三&quot;,
  age: 18,
  ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>exports 导出方式：exports 是 module.exports 的一个引用，可以将 exports 对象上的属性作为模块的导出内容，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 导出一个变量
exports.myVariable = 100;
// 导出一个函数
exports.myFunction = function() { ... };
// 导出一个对象
exports.myObject = {
  name: &quot;张三&quot;,
  age: 18,
  ...
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CommonJS 模块化还有以下两种导入方式：</strong></p><ol><li>直接导入模块：使用 require() 函数可以直接导入一个模块的全部内容，例如：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const myModule = require(&quot;./myModule&quot;);
console.log(myModule.myVariable); // 输出 myVariable 的值
myModule.myFunction(); // 调用 myFunction 函数
console.log(myModule.myObject.name); // 输出 myObject 对象的 name 属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>解构导入模块：使用 require() 函数可以通过解构赋值的方式导入一个模块的部分内容，例如：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const { myVariable, myFunction, myObject } = require(&quot;./myModule&quot;);
console.log(myVariable); // 输出 myVariable 的值
myFunction(); // 调用 myFunction 函数
console.log(myObject.name); // 输出 myObject 对象的 name 属性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体来说，CommonJS 规范提供了一种简单、灵活、独立的模块化方案，已经成为 Node.js 中模块化的主要标准，被广泛应用于服务器端的 JavaScript 应用程序开发中。</p><h3 id="amd-规范" tabindex="-1"><a class="header-anchor" href="#amd-规范" aria-hidden="true">#</a> AMD 规范</h3><p>AMD 规范（Asynchronous Module Definition，异步模块定义）是一种用于 JavaScript 应用程序的模块化规范，最初是为浏览器端 JavaScript 开发设计的。该规范定义了一种用于模块加载和导出的 API，以及模块的基本结构。与 CommonJS 规范不同，AMD 规范支持异步加载模块，在加载完成后再执行后续的操作。</p><p><strong>AMD 规范主要有以下两个部分：</strong></p><ol><li>模块定义（define）：用于定义模块及其依赖项，类似于 CommonJS 的模块定义。</li><li>模块加载（require）：用于异步加载模块及其依赖项，并在加载完成后执行回调函数。 在 AMD 规范下，每个模块都是一个单独的文件，模块中的代码只有在被 require 函数引用时才会执行。在模块中定义的变量、函数和对象都是私有的，只有通过 return 或 exports 对象暴露出来的才能被其他模块访问到。因为 AMD 规范支持异步加载模块，所以可以在加载模块时指定依赖项，确保依赖项已经加载完成后再执行后续的操作，从而提高程序的性能。AMD 规范主要被用于浏览器端 JavaScript 的模块化，例如 RequireJS 就是一个符合 AMD 规范的模块加载器。虽然 Node.js 不支持 AMD 规范，但开发者可以使用一些转换工具将 AMD 模块转换为 CommonJS 或 ES6 模块，以便于在 Node.js 中使用。</li></ol><p><strong>AMD 规范具有以下特点：</strong></p><ol><li><p>异步加载：AMD 规范采用异步加载模块的方式，在需要使用某个模块时再加载该模块，避免了在应用程序启动时就加载所有模块的低效率问题。</p></li><li><p>依赖前置：AMD 规范要求模块的依赖关系在模块定义时就要声明，便于模块加载器在异步加载模块时按照正确的顺序加载依赖模块。</p></li><li><p>全局命名空间独立：AMD 规范要求每个模块都运行在一个独立的作用域中，不会污染全局命名空间。</p></li><li><p>高度灵活：AMD 规范支持多种模块定义方式和多种模块加载器，允许开发者根据应用程序的特点选择适合的模块化方案。</p></li></ol><p>AMD 规范有以下两种导出方式：</p><ul><li>define() 函数导出方式：使用 define() 函数来定义一个模块，通过返回值来指定模块的导出内容，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define([&#39;moduleA&#39;, &#39;moduleB&#39;], function(moduleA, moduleB) {
  // 定义一个变量
  var myVariable = 100;
  // 定义一个函数
  function myFunction() { ... }
  // 定义一个对象
  var myObject = {
    name: &quot;张三&quot;,
    age: 18,
    ...
  };
  // 返回一个对象作为模块的导出内容
  return {
    myVariable: myVariable,
    myFunction: myFunction,
    myObject: myObject
  };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>简化的 define() 函数导出方式：使用 define() 函数定义一个模块时省略模块依赖关系参数，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>define(function(require, exports, module) {
  // 导入模块
  var moduleA = require(&#39;moduleA&#39;);
  var moduleB = require(&#39;moduleB&#39;);
  // 定义一个变量
  var myVariable = 100;
  // 定义一个函数
  function myFunction() { ... }
  // 定义一个对象
  var myObject = {
    name: &quot;张三&quot;,
    age: 18,
    ...
  };
  // 指定模块的导出内容
  module.exports = {
    myVariable: myVariable,
    myFunction: myFunction,
    myObject: myObject
  };
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AMD 规范有以下两种导入方式：</p><ul><li>直接导入模块：使用 require() 函数可以直接导入一个模块的全部内容，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>require([&#39;myModule&#39;], function(myModule) {
  console.log(myModule.myVariable); // 输出 myVariable 的值
  myModule.myFunction(); // 调用 myFunction 函数
  console.log(myModule.myObject.name); // 输出 myObject 对象的 name 属性
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>解构导入模块：使用 require() 函数可以通过解构赋值的方式导入一个模块的部分内容，例如：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>require([&#39;myModule&#39;], function({ myVariable, myFunction, myObject }) {
  console.log(myVariable); // 输出 myVariable 的值
  myFunction(); // 调用 myFunction 函数
  console.log(myObject.name); // 输出 myObject 对象的 name 属性
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总体来说，AMD 规范提供了一种高效、灵活、可维护的模块化方案，已经被广泛应用于浏览器端的 JavaScript 应用程序开发中。</p><h3 id="amd-commonjs-es6-模块化-三者的区别" tabindex="-1"><a class="header-anchor" href="#amd-commonjs-es6-模块化-三者的区别" aria-hidden="true">#</a> AMD , CommonJS, ES6 模块化 三者的区别</h3><p>AMD、CommonJS 和 ES6 模块化是 JavaScript 应用程序中常用的三种模块化规范，它们之间有一些区别，主要包括以下几个方面：</p><ol><li>加载方式</li></ol><ul><li>AMD 规范：采用异步加载模块的方式，即在需要时再去加载依赖的模块，可以提高页面的加载速度。</li><li>CommonJS 规范：采用同步加载模块的方式，即在代码执行前先加载所有的依赖模块，适用于服务器端的 JavaScript 应用。</li><li>ES6 模块化：采用编译时静态加载模块的方式，即在代码执行前就已经确定了所有的依赖关系，并在编译时进行了静态分析和优化。</li></ul><ol start="2"><li>定义方式</li></ol><ul><li><p>AMD 规范：通过 define() 函数定义模块，可以指定依赖项和回调函数，当所有依赖项加载完成后执行回调函数。</p></li><li><p>CommonJS 规范：通过 require() 函数加载模块，通过 exports 或 module.exports 对象导出模块。</p></li><li><p>ES6 模块化：通过 import 和 export 关键字定义和导出模块，可以指定默认导出和命名导出。</p></li></ul><ol start="3"><li>作用域</li></ol><ul><li><p>AMD 规范：每个模块都有自己的作用域，模块中定义的变量、函数和对象只在本模块中可见。</p></li><li><p>CommonJS 规范：每个模块都运行在一个独立的作用域中，模块中定义的变量、函数和对象只在本模块中可见。</p></li><li><p>ES6 模块化：每个模块都有自己的作用域，模块中定义的变量、函数和对象只在本模块中可见，可以使用 export 和 import 关键字将模块导出和导入到其他模块中。</p></li></ul><ol start="4"><li>可用性</li></ol><ul><li><p>AMD 规范：主要用于浏览器端 JavaScript 应用程序的模块化开发。</p></li><li><p>CommonJS 规范：主要用于服务器端 JavaScript 应用程序的模块化开发。</p></li><li><p>ES6 模块化：现代浏览器和 Node.js 等环境均支持 ES6 模块化，已成为 JavaScript 应用程序模块化的主要标准。</p></li></ul><p>总体来说，AMD 规范适用于浏览器端异步加载模块的场景，CommonJS 规范适用于服务器端同步加载模块的场景，而 ES6 模块化成为了 JavaScript 应用程序模块化的主要标准，适用于大多数场景。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/node/模块化介绍.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "模块化介绍.html.vue"]]);
export {
  ______html as default
};
