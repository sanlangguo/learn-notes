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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_21-chrome开发者工具-利用网络面板做性能分析" tabindex="-1"><a class="header-anchor" href="#_21-chrome开发者工具-利用网络面板做性能分析" aria-hidden="true">#</a> 21-Chrome开发者工具：利用网络面板做性能分析</h2><p>本文主要介绍了Chrome开发者工具的应用，其中重点介绍了网络面板的使用。网络面板可以展示页面的源头和网络数据的接收情况，是性能分析和调试页面的重要工具。</p><h3 id="chrome开发者工具" tabindex="-1"><a class="header-anchor" href="#chrome开发者工具" aria-hidden="true">#</a> Chrome开发者工具</h3><p>Chrome开发者工具是一组网页制作和调试的工具，内嵌于Google Chrome浏览器中。Chrome开发者工具包含了10个功能面板，其中与性能相关的有网络面板、Performance面板、内存面板等，与调试页面相关的有Elements面板、Sources面板、Console面板等。</p><p>你可以在浏览器窗口的右上方选择Chrome菜单，然后选择“更多工具–&gt;开发者工具”来打开Chrome开发者工具。</p><h3 id="网络面板" tabindex="-1"><a class="header-anchor" href="#网络面板" aria-hidden="true">#</a> 网络面板</h3><p>网络面板是Chrome开发者工具中的一个重要面板，可以展示页面的源头和网络数据的接收情况。使用网络面板可以分析页面性能，找出性能问题并进行优化。</p><h3 id="其他面板" tabindex="-1"><a class="header-anchor" href="#其他面板" aria-hidden="true">#</a> 其他面板</h3><p>除了网络面板，Chrome开发者工具还包含了其他重要的面板，包括Elements、Console、Sources、Performance、Memory、Application、Security、Audits和Layers等。这些面板的主要功能如下表所示：</p><table><thead><tr><th>面板名称</th><th>功能</th></tr></thead><tbody><tr><td>Elements</td><td>检查和编辑DOM和CSS</td></tr><tr><td>Console</td><td>日志记录和调试JavaScript</td></tr><tr><td>Sources</td><td>编辑和调试JavaScript源码</td></tr><tr><td>Performance</td><td>分析页面性能</td></tr><tr><td>Memory</td><td>分析内存使用情况</td></tr><tr><td>Application</td><td>查看Web应用程序的本地存储、缓存和Cookie</td></tr><tr><td>Security</td><td>查看网站的安全信息</td></tr><tr><td>Audits</td><td>分析页面性能、可访问性和最佳实践</td></tr><tr><td>Layers</td><td>查看页面渲染过程中的图层</td></tr></tbody></table><p>以上是Chrome开发者工具中一些重要的面板及其功能介绍。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/21.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _21_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "21.html.vue"]]);
export {
  _21_html as default
};
