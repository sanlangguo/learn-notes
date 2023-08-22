import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.cbae9f3f.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_02-函数即对象-一篇文章彻底搞懂javascript的函数特点" tabindex="-1"><a class="header-anchor" href="#_02-函数即对象-一篇文章彻底搞懂javascript的函数特点" aria-hidden="true">#</a> 02-函数即对象：一篇文章彻底搞懂JavaScript的函数特点</h2><p>本文对JavaScript中的函数特点进行了深入分析，主要包括以下内容：</p><h3 id="函数是一等公民" tabindex="-1"><a class="header-anchor" href="#函数是一等公民" aria-hidden="true">#</a> 函数是一等公民</h3><p>JavaScript中的函数是一种特殊的对象，被称为“一等公民”，这使得JavaScript非常灵活，容易实现一些特性，比如闭包和函数式编程。</p><h3 id="对象和面向对象" tabindex="-1"><a class="header-anchor" href="#对象和面向对象" aria-hidden="true">#</a> 对象和面向对象</h3><p>在JavaScript中，大部分内容都是由对象构成的，包括函数和数组等。JavaScript是基于对象的语言，但与其他面向对象语言不同，它是基于原型(prototype)而不是类(class)的。</p><h3 id="函数的特点" tabindex="-1"><a class="header-anchor" href="#函数的特点" aria-hidden="true">#</a> 函数的特点</h3><p>JavaScript中的函数具有以下特点：</p><ul><li>可以像普通变量一样被赋值和传递</li><li>可以作为参数传递给其他函数</li><li>可以作为其他函数的返回值</li><li>可以在运行时动态地创建和修改</li><li>闭包和函数式编程</li><li>由于JavaScript中的函数是一等公民，因此可以很容易地实现闭包和函数式编程。本文对这两个特性进行了简要介绍，并指出它们在实际项目中的重要性。</li></ul><h3 id="闭包的实现" tabindex="-1"><a class="header-anchor" href="#闭包的实现" aria-hidden="true">#</a> 闭包的实现</h3><p>闭包是指函数可以访问其词法作用域外的变量。在JavaScript中，闭包的实现需要同时考虑到函数作用域和词法作用域，这就需要引擎在运行时动态地创建并维护一个作用域链。</p><p>V8引擎在实现闭包时，会将函数和其所在的词法作用域打包成一个闭包对象，这个对象会被存储在堆内存中。在函数执行时，V8引擎会根据作用域链查找变量的值，如果变量在当前作用域中不存在，则会逐级向上查找，直到找到为止。</p><h3 id="加速javascript代码执行" tabindex="-1"><a class="header-anchor" href="#加速javascript代码执行" aria-hidden="true">#</a> 加速JavaScript代码执行</h3><p>V8引擎在加速JavaScript代码执行方面主要采用了以下两种技术：</p><h3 id="jit编译" tabindex="-1"><a class="header-anchor" href="#jit编译" aria-hidden="true">#</a> JIT编译</h3><p>JIT(即时编译)是指将JavaScript代码在运行时动态地编译成机器码，从而提高代码的执行速度。V8引擎采用了一种称为“热点代码优化”的技术，它会对频繁执行的代码进行优化，将其编译成高效的机器码。</p><h3 id="隐藏类" tabindex="-1"><a class="header-anchor" href="#隐藏类" aria-hidden="true">#</a> 隐藏类</h3><p>隐藏类是一种将JavaScript对象映射到内存中的数据结构，它可以提高对象属性的访问速度。V8引擎通过动态生成隐藏类来优化对象属性的访问，从而提高代码的执行速度。</p><h3 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎" aria-hidden="true">#</a> V8引擎</h3><p>本文还提到了V8引擎，介绍了它是如何实现闭包和加速JavaScript代码执行的。 通过本文的阅读，读者可以深入了解JavaScript中函数的特点和底层机制，提高自己的代码编写能力。 总的来说，V8引擎通过闭包的实现和加速JavaScript代码执行来提高代码的性能，从而为Chrome浏览器和Node.js等应用提供了更好的用户体验。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/02.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _02_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "02.html.vue"]]);
export {
  _02_html as default
};
