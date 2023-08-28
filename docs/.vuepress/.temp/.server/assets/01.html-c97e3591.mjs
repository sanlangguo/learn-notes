import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.0c33dd42.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_01-chrome架构-仅仅打开了1个页面-为什么有4个进程" tabindex="-1"><a class="header-anchor" href="#_01-chrome架构-仅仅打开了1个页面-为什么有4个进程" aria-hidden="true">#</a> 01-Chrome架构：仅仅打开了1个页面，为什么有4个进程？</h2><p>介绍了Chrome浏览器的多进程架构，以及为什么打开一个页面会启动多个进程。通过学习浏览器的多进程架构，可以更好地理解Web应用的各个功能组件。</p><p>打开一个页面可能会涉及到多个进程，其中包括：</p><ul><li>浏览器进程：负责协调和控制所有进程的工作，比如管理标签页、扩展程序、网络请求等。</li><li>渲染进程：负责解析HTML、CSS和JavaScript，将网页渲染成可交互的页面。</li><li>GPU进程：负责处理页面中的GPU任务，如3D绘图、动画等。</li><li>插件进程：负责运行插件程序，如Flash、Java等。</li></ul><h3 id="选择chrome浏览器作为例子" tabindex="-1"><a class="header-anchor" href="#选择chrome浏览器作为例子" aria-hidden="true">#</a> 选择Chrome浏览器作为例子</h3><p>Chrome浏览器是基于Chromium开发的官方发行版，使用率最高，因此选择它作为例子进行讲解。</p><h3 id="进程和线程的关系" tabindex="-1"><a class="header-anchor" href="#进程和线程的关系" aria-hidden="true">#</a> 进程和线程的关系</h3><p>进程是一个程序的运行实例，包含代码、数据和执行任务的主线程。线程是依附于进程的，多线程可以并行处理任务，但线程不能单独存在。</p><h3 id="并行处理的概念" tabindex="-1"><a class="header-anchor" href="#并行处理的概念" aria-hidden="true">#</a> 并行处理的概念</h3><p>并行处理是指同一时刻处理多个任务。通过拆分任务并使用多线程可以提升性能。</p><h3 id="单进程浏览器的问题" tabindex="-1"><a class="header-anchor" href="#单进程浏览器的问题" aria-hidden="true">#</a> 单进程浏览器的问题</h3><p>单进程浏览器中，所有功能模块都运行在同一个进程中，导致不稳定、不流畅和不安全。插件和渲染引擎容易出问题，JavaScript阻塞会导致浏览器失去响应，页面的内存泄漏会导致浏览器变慢，插件和页面脚本存在安全隐患。</p><h3 id="多进程架构的解决方案" tabindex="-1"><a class="header-anchor" href="#多进程架构的解决方案" aria-hidden="true">#</a> 多进程架构的解决方案</h3><p>现代浏览器采用多进程架构，其中页面和插件运行在单独的进程中，通过IPC进行通信。多进程架构解决了页面或插件崩溃导致整个浏览器崩溃的问题，提高了浏览器的稳定性和安全性。</p><h3 id="多进程架构的优势和挑战" tabindex="-1"><a class="header-anchor" href="#多进程架构的优势和挑战" aria-hidden="true">#</a> 多进程架构的优势和挑战</h3><p>多进程架构提升了浏览器的稳定性、流畅性和安全性，但也带来了更高的资源占用和复杂的体系架构的问题。</p><h3 id="面向服务的架构过渡" tabindex="-1"><a class="header-anchor" href="#面向服务的架构过渡" aria-hidden="true">#</a> 面向服务的架构过渡</h3><p>Chrome团队正在向面向服务的架构过渡，将各模块重构为独立的服务，每个服务可以在独立的进程中运行，通过IPC进行通信，以实现更简单、稳定、高速和安全的系统。</p><h3 id="chrome基础服务的构建" tabindex="-1"><a class="header-anchor" href="#chrome基础服务的构建" aria-hidden="true">#</a> Chrome基础服务的构建</h3><p>Chrome正在逐步构建Chrome基础服务，将UI、数据库、文件、设备、网络等模块重构为基础服务，以实现Chrome的简单、稳定、高速和安全的目标。</p><p>通过学习Chrome浏览器的多进程架构，可以更好地理解和优化Web应用。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/01.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _01_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "01.html.vue"]]);
export {
  _01_html as default
};
