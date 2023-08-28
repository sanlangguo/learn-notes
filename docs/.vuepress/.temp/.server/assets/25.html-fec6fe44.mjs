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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_25-页面性能-如何系统地优化页面" tabindex="-1"><a class="header-anchor" href="#_25-页面性能-如何系统地优化页面" aria-hidden="true">#</a> 25-页面性能：如何系统地优化页面？</h2><p>本文从系统地优化页面速度的角度出发，分析了一个页面的生命周期中不同阶段的关注点和优化策略。主要关注加载阶段和交互阶段，因为这两个阶段影响着用户体验。</p><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期" aria-hidden="true">#</a> 页面生命周期</h3><p>一个页面的生命周期通常可分为三个阶段：</p><ol><li>加载阶段：从发出请求到渲染出完整页面的过程。主要受网络和JavaScript脚本的影响。</li><li>交互阶段：从页面加载完成到用户交互的整合过程。主要受JavaScript脚本的影响。</li><li>关闭阶段：用户发出关闭指令后页面所做的一些清理操作。</li></ol><h3 id="加载阶段优化" tabindex="-1"><a class="header-anchor" href="#加载阶段优化" aria-hidden="true">#</a> 加载阶段优化</h3><p>加载阶段是影响页面加载速度的关键因素。以下是一些优化策略：</p><ul><li>减少HTTP请求：使用CSS Sprites、图像地图、合并JavaScript和CSS文件等方式来减少HTTP请求次数。</li><li>压缩文件大小：使用Gzip压缩、图片压缩等方式来减少文件大小。</li><li>使用CDN：使用CDN来分发静态资源，减少网络延迟。</li><li>延迟加载：将不必要的资源延迟加载，如图片、JavaScript等。</li><li>使用浏览器缓存：使用Expires头、Cache-Control头等方式来利用浏览器缓存。</li></ul><h3 id="交互阶段优化" tabindex="-1"><a class="header-anchor" href="#交互阶段优化" aria-hidden="true">#</a> 交互阶段优化</h3><p>交互阶段是影响用户体验的关键因素。以下是一些优化策略：</p><ul><li>减少DOM操作：DOM操作是昂贵的，应尽量减少DOM操作次数。</li><li>使用事件委托：事件委托可以减少事件处理程序的数量，提高性能。</li><li>避免强制同步布局：强制同步布局会导致性能下降，应尽量避免使用offsetWidth、offsetHeight等属性。</li><li>使用requestAnimationFrame：requestAnimationFrame可以在每一帧之前执行代码，提高性能。</li><li>使用Web Workers：Web Workers可以将一些计算密集型任务放到后台线程中执行，提高性能。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文从系统地优化页面速度的角度出发，分析了一个页面的生命周期中不同阶段的关注点和优化策略。通过减少HTTP请求、压缩文件大小、使用CDN、延迟加载、使用浏览器缓存等方式来优化加载阶段；通过减少DOM操作、使用事件委托、避免强制同步布局、使用requestAnimationFrame、使用Web Workers等方式来优化交互阶段。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/25.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _25_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "25.html.vue"]]);
export {
  _25_html as default
};
