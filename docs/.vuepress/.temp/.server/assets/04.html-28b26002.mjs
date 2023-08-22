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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_04-导航流程-从输入url到页面展示-这中间发生了什么" tabindex="-1"><a class="header-anchor" href="#_04-导航流程-从输入url到页面展示-这中间发生了什么" aria-hidden="true">#</a> 04-导航流程：从输入URL到页面展示，这中间发生了什么？</h2><p>从输入URL到页面展示：整个流程 这篇文章介绍了从用户输入URL到页面展示的整个流程，并标记出了核心节点。整个过程需要浏览器进程、网络进程和渲染进程之间的配合。浏览器进程主要负责用户交互、子进程管理和文件储存等功能；网络进程提供网络下载功能；渲染进程把从网络下载的HTML、JavaScript、CSS、图片等资源解析为可以显示和交互的页面。 整个过程可以大致描述如下：</p><h3 id="用户输入url请求-浏览器进程接收到后将该url转发给网络进程。" tabindex="-1"><a class="header-anchor" href="#用户输入url请求-浏览器进程接收到后将该url转发给网络进程。" aria-hidden="true">#</a> 用户输入URL请求，浏览器进程接收到后将该URL转发给网络进程。</h3><ol><li>网络进程中发起真正的URL请求。</li><li>网络进程接收到响应头数据，解析响应头数据，并将数据转发给浏览器进程。</li><li>浏览器进程接收到网络进程的响应头数据之后，发送“提交导航(CommitNavigation)”消息到渲染进程。</li><li>渲染进程接收到“提交导航”的消息之后，开始准备接收HTML数据，接收数据的方式是直接和网络进程建立数据管道。</li><li>最后渲染进程会向浏览器进程“确认提交”，告诉浏览器进程：“已经准备好接受和解析页面数据了”。</li><li>浏览器进程接收到渲染进程“提交文档”的消息之后，开始移除之前旧的文档，然后更新浏览器进程中的页面状态。</li></ol><p>其中，用户发出URL请求到页面开始解析的这个过程，就叫做导航。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/04.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _04_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "04.html.vue"]]);
export {
  _04_html as default
};
