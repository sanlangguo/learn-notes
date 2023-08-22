import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.11715a5c.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_06-渲染流程-下-html、css和javascript-是如何变成页面的" tabindex="-1"><a class="header-anchor" href="#_06-渲染流程-下-html、css和javascript-是如何变成页面的" aria-hidden="true">#</a> 06-渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的？</h2><p>本文是渲染流水线的第二部分，主要介绍渲染流水线后面的阶段。在上一篇文章中，我们讲解了渲染流水线中的DOM生成、样式计算和布局三个阶段。</p><h3 id="分层" tabindex="-1"><a class="header-anchor" href="#分层" aria-hidden="true">#</a> 分层</h3><p>在本文中，我们介绍了分层这一阶段。在布局树中，每个元素的位置信息都已经计算出来了，但是为了实现一些复杂的效果，如3D变换、页面滚动和z-indexing等，渲染引擎需要为特定的节点生成专用的图层，并生成一棵对应的图层树（LayerTree）。图层叠加在一起构成了最终的页面图像。通过Chrome开发者工具中的“Layers”标签，可以可视化页面的分层情况。</p><h3 id="图层绘制" tabindex="-1"><a class="header-anchor" href="#图层绘制" aria-hidden="true">#</a> 图层绘制</h3><p>在图层分割后，渲染引擎将开始在每个图层上绘制内容。这个过程包括将元素转换为位图、应用滤镜和混合模式等。这些操作都是在GPU上执行的，因为GPU可以并行绘制多个图层。</p><h3 id="栅格化" tabindex="-1"><a class="header-anchor" href="#栅格化" aria-hidden="true">#</a> 栅格化</h3><p>栅格化是将图层转换为位图的过程。在栅格化之前，渲染引擎会检查图层是否需要被栅格化，如果不需要，则直接将它们传递给合成器。如果需要，则会创建一个位图，并将图层内容绘制到位图上。</p><h3 id="合成" tabindex="-1"><a class="header-anchor" href="#合成" aria-hidden="true">#</a> 合成</h3><p>合成是将多个图层合并成一个单一的图像的过程。在合成器中，渲染引擎会将每个图层绘制到一个单独的纹理中，并将它们组合起来形成最终的页面图像。这个过程是在GPU上执行的，并且可以使用硬件加速。</p><h3 id="一个完整的渲染流程大致可总结为如下" tabindex="-1"><a class="header-anchor" href="#一个完整的渲染流程大致可总结为如下" aria-hidden="true">#</a> 一个完整的渲染流程大致可总结为如下：</h3><ol><li>渲染进程将 HTML 内容转换为能够读懂的 DOM 树结构。</li><li>渲染引擎将 CSS 样式表转化为浏览器可以理解的 styleSheets，计算出 DOM 节点的样式。</li><li>创建布局树，并计算元素的布局信息。</li><li>对布局树进行分层，并生成分层树。</li><li>为每个图层生成绘制列表，并将其提交到合成线程。</li><li>合成线程将图层分成图块，并在光栅化线程池中将图块转换成位图。</li><li>合成线程发送绘制图块命令 DrawQuad 给浏览器进程。</li><li>浏览器进程根据 DrawQuad 消息生成页面，并显示到显示器上。</li></ol><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>在本文中，我们介绍了渲染流水线中的分层、图层绘制、栅格化和合成四个阶段。这些阶段是构成浏览器页面渲染过程中不可或缺的部分。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/06.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "06.html.vue"]]);
export {
  _06_html as default
};
