import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.80b21bdd.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_09-块级作用域-var缺陷以及为什么要引入let和const" tabindex="-1"><a class="header-anchor" href="#_09-块级作用域-var缺陷以及为什么要引入let和const" aria-hidden="true">#</a> 09-块级作用域：var缺陷以及为什么要引入let和const？</h2><p>本文主要讲解 JavaScript 中作用域相关的内容，包括变量提升、作用域和块级作用域等。同时，文章也介绍了 JavaScript 中的设计缺陷，以及为什么引入 let 和 const 关键字来解决这个问题。</p><h3 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h3><p>作用域是指在程序中定义变量的区域，该位置决定了变量的生命周期。在 ES6 之前，ES 的作用域只有两种：全局作用域和函数作用域。全局作用域中的对象在代码中的任何地方都能访问，其生命周期伴随着页面的生命周期。函数作用域就是在函数内部定义的变量或者函数，它们只能在函数内部被访问到。</p><h3 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升" aria-hidden="true">#</a> 变量提升</h3><p>JavaScript 存在变量提升这种特性，从而导致了很多与直觉不符的代码，这也是 JavaScript 的一个重要设计缺陷。变量提升是指在编译阶段，JavaScript 引擎会将变量和函数的声明提升到代码的最前面，这样就可以在声明之前访问这些变量和函数。</p><h3 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h3><p>ES6 引入了块级作用域，并配合 let 和 const 关键字，来避免变量提升这种设计缺陷。块级作用域指的是在代码块内部定义的变量或者函数，它们只能在代码块内部被访问到。let 和 const 关键字声明的变量都具有块级作用域。</p><h3 id="var-缺陷" tabindex="-1"><a class="header-anchor" href="#var-缺陷" aria-hidden="true">#</a> var 缺陷</h3><p>var 存在很多缺陷，其中最大的问题就是它没有块级作用域。在使用 var 声明变量时，如果不小心将变量声明放在了代码块外面，那么这个变量就会成为全局变量，从而污染全局命名空间。同时，在 for 循环中使用 var 声明变量时，由于 var 没有块级作用域，所以循环内部声明的变量会污染循环外部的命名空间。</p><h3 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> let 和 const</h3><p>let 和 const 关键字声明的变量具有块级作用域，并且不存在变量提升这种设计缺陷。let 声明的变量可以被重新赋值，但是不能被重新声明；const 声明的变量既不能被重新赋值，也不能被重新声明。使用 let 和 const 可以避免 var 存在的很多问题，并且更符合直觉。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/09.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _09_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "09.html.vue"]]);
export {
  _09_html as default
};
