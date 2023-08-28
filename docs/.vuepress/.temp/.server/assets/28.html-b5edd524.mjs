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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_28-webcomponent-像搭积木一样构建web应用" tabindex="-1"><a class="header-anchor" href="#_28-webcomponent-像搭积木一样构建web应用" aria-hidden="true">#</a> 28-WebComponent：像搭积木一样构建Web应用</h2><p>本文介绍了WebComponent技术，它是一套技术的组合，能提供给开发者组件化开发的能力。组件化开发的核心思想是对内高内聚、对外低耦合。通过组件化可以降低整个系统的耦合度，同时也降低程序员之间沟通复杂度，让系统变得更加易于维护。</p><p>WebComponent技术是由多个技术组成的，包括自定义元素、影子DOM、HTML模板和HTML导入等。其中自定义元素是WebComponent的核心，它允许开发者创建自己的HTML标签，实现对内高内聚的组件化开发。影子DOM则是一种封装了样式和DOM结构的技术，使得开发者可以将组件作为一个黑盒子来使用。HTML模板则提供了一种定义模板的方式，使得开发者可以定义组件的结构和样式。HTML导入则是一种导入HTML模板的方式。</p><p>WebComponent技术的优势包括：1）可复用性：组件可以在不同的项目中被复用，提高了开发效率；2）可维护性：组件化开发降低了系统的耦合度，使得系统更易于维护；3）可扩展性：组件可以被单独扩展，而不影响其他组件。</p><p>在使用WebComponent技术时，需要注意以下几点：</p><ol><li>浏览器支持：目前WebComponent技术在现代浏览器中已经得到了支持，但在旧版本浏览器中可能无法正常工作；</li><li>兼容性：不同浏览器对WebComponent技术的支持程度可能不同，需要进行兼容性测试；</li><li>规范性：WebComponent技术还没有得到W3C的官方标准化，因此可能存在兼容性和规范性问题。</li></ol><p>总之，WebComponent技术提供了一种组件化开发的方式，使得开发者可以像搭积木一样构建Web应用。虽然目前存在一些问题，但随着浏览器对WebComponent技术支持的逐步完善，相信它将会在未来得到广泛应用。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/28.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _28_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "28.html.vue"]]);
export {
  _28_html as default
};
