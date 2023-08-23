import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../app.3b32e088.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="vue-react-区别" tabindex="-1"><a class="header-anchor" href="#vue-react-区别" aria-hidden="true">#</a> vue react 区别</h4><p><a href="https://blog.csdn.net/xgangzai/article/details/115301290" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue响应式原理" tabindex="-1"><a class="header-anchor" href="#vue响应式原理" aria-hidden="true">#</a> vue响应式原理</h4><p><a href="https://cn.vuejs.org/v2/guide/reactivity.html" target="_blank" rel="noopener noreferrer">vue官网解释`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue文件编译原理" tabindex="-1"><a class="header-anchor" href="#vue文件编译原理" aria-hidden="true">#</a> vue文件编译原理</h4><p><a href="https://forum.vuejs.org/t/vue-js-vue-js/60884" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="计算属性-vs-监听属性" tabindex="-1"><a class="header-anchor" href="#计算属性-vs-监听属性" aria-hidden="true">#</a> 计算属性 VS 监听属性</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。

计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue-data-为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#vue-data-为什么是一个函数" aria-hidden="true">#</a> vue data 为什么是一个函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  为了保证组件的独立性和可复用性，data 是一个函数，组件实例化的时候这个函数将会被调用，返回一个对象，计算机会给这个对象分配一个内存地址，你实例化几次，就分配几个内存地址，他们的地址都不一样，所以每个组件中的数据不会相互干扰，改变其中一个组件的状态，其它组件不变。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><a href="https://www.jianshu.com/p/b821d3401314" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a><br><a href="https://axiu.me/coding/why-vue-component-data-must-be-function/" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue文件编译原理-常见面试题" tabindex="-1"><a class="header-anchor" href="#vue文件编译原理-常见面试题" aria-hidden="true">#</a> vue文件编译原理/常见面试题</h4><p><a href="https://cloud.tencent.com/developer/article/1601614" target="_blank" rel="noopener noreferrer">Vue中的模板编译原理 01`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="https://github.com/berwin/Blog/issues/18" target="_blank" rel="noopener noreferrer">Vue模板编译原理 02`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="https://www.cnblogs.com/skywind/p/14653339.html#12-vuejs-%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86" target="_blank" rel="noopener noreferrer">常见面试题`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="this-nexttick-原理-100次更新dem-执行一次-更新dom-为什么是异步的" tabindex="-1"><a class="header-anchor" href="#this-nexttick-原理-100次更新dem-执行一次-更新dom-为什么是异步的" aria-hidden="true">#</a> this.nextTick() 原理 100次更新dem 执行一次 (更新dom 为什么是异步的)</h4><p><a href="https://github.com/berwin/Blog/issues/22" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue-router-hash-history-核心理解" tabindex="-1"><a class="header-anchor" href="#vue-router-hash-history-核心理解" aria-hidden="true">#</a> vue-router hash history 核心理解</h4><p><a href="https://juejin.cn/post/6921965450742431758" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><p><a href="https://www.jianshu.com/p/3b4abc20ae0f" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue3-watcher-原理" tabindex="-1"><a class="header-anchor" href="#vue3-watcher-原理" aria-hidden="true">#</a> vue3 watcher 原理</h4><p><a href="https://originalix.github.io/2021/06/16/Vue3-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90-%E5%8D%81-watch-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/#" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="为什么选用vuex-不用-object-的根本原因" tabindex="-1"><a class="header-anchor" href="#为什么选用vuex-不用-object-的根本原因" aria-hidden="true">#</a> 为什么选用vuex, 不用 object 的根本原因</h4><p>可以使用，vuex 提供的是一种完整的解决方案，看个人怎么选择，在团队开发当中，统一规范</p><p><a href="https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E6%88%91%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8-vuex%EF%BC%9F" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue3-哪些变化" tabindex="-1"><a class="header-anchor" href="#vue3-哪些变化" aria-hidden="true">#</a> vue3 哪些变化</h4><p><a href="https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h4 id="vue3-响应式原理" tabindex="-1"><a class="header-anchor" href="#vue3-响应式原理" aria-hidden="true">#</a> vue3 响应式原理</h4><p><a href="https://juejin.cn/post/6858899262596448270#heading-21" target="_blank" rel="noopener noreferrer">参考链接`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><h3 id="vue-组件传值" tabindex="-1"><a class="header-anchor" href="#vue-组件传值" aria-hidden="true">#</a> vue 组件传值</h3><p><a href="https://segmentfault.com/a/1190000022700216" target="_blank" rel="noopener noreferrer">vue组件之间相互传值的方式`);
  _push(ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/vue/vue.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vue_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "vue.html.vue"]]);
export {
  vue_html as default
};
