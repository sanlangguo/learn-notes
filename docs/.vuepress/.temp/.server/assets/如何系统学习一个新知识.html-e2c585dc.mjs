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
  _push(`<div${ssrRenderAttrs(_attrs)}><h4 id="如何快速学习一个新的领域" tabindex="-1"><a class="header-anchor" href="#如何快速学习一个新的领域" aria-hidden="true">#</a> 如何快速学习一个新的领域</h4><ol><li>梳理新领域的知识框架</li></ol><ul><li>前期搜索该知识的框架介绍</li><li>可靠信息来源的查询</li><li>权威书籍的章节重点知识介绍</li><li>一手信息</li></ul><ol start="2"><li>多问为什么</li></ol><ul><li>多思考一些问题</li><li>一层一层的逐步去问</li></ul><ol start="3"><li>时间线</li></ol><ul><li>一步步怎么发展过来的</li><li>结果性数据</li></ul><ol start="4"><li>输出</li></ol><ul><li>看关键信息可以看两遍 （1 快速扫描信息重点 2再针对重点问题或者信息多仔细查阅）</li><li>输出自己的理解和看法</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/随手记/如何系统学习一个新知识.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "如何系统学习一个新知识.html.vue"]]);
export {
  ____________html as default
};
