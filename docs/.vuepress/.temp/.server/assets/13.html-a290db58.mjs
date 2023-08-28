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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_13-字节码-一-v8为什么又重新引入字节码" tabindex="-1"><a class="header-anchor" href="#_13-字节码-一-v8为什么又重新引入字节码" aria-hidden="true">#</a> 13-字节码（一）：V8为什么又重新引入字节码</h2><p>本文介绍了V8引擎的编译流水线，以及字节码在其中的作用。V8引擎在执行JavaScript代码之前，需要将其编译为字节码，然后再解释执行字节码或者将字节码编译为二进制代码然后再执行。</p><h3 id="早期v8引擎的执行流程" tabindex="-1"><a class="header-anchor" href="#早期v8引擎的执行流程" aria-hidden="true">#</a> 早期V8引擎的执行流程</h3><p>早期的V8引擎采用了直接将JavaScript代码编译为机器代码的方式，其执行流程如下：</p><p>将JavaScript代码转换为抽象语法树(AST)。 基线编译器将抽象语法树编译为未优化过的机器代码。 V8直接执行这些未优化过的机器代码。 如果V8检测到某段代码重复执行的概率过高，那么V8会将该段代码标记为HOT。 标记为HOT的代码会被优化编译器优化为执行效率更高的机器代码。 引入字节码的原因 早期的V8引擎中，将JavaScript代码直接编译为机器代码虽然能够提高执行效率，但是编译时间长且内存占用高，不利于代码的快速启动和运行。因此，V8团队重新引入了字节码作为中间代码，以提高启动速度和降低内存占用。</p><h3 id="字节码的作用" tabindex="-1"><a class="header-anchor" href="#字节码的作用" aria-hidden="true">#</a> 字节码的作用</h3><p>在新版的V8引擎中，字节码有两个作用：</p><h3 id="解释器可以直接解释执行字节码。" tabindex="-1"><a class="header-anchor" href="#解释器可以直接解释执行字节码。" aria-hidden="true">#</a> 解释器可以直接解释执行字节码。</h3><p>优化编译器可以将字节码编译为二进制代码，然后再执行二进制机器代码。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文介绍了早期V8引擎和新版V8引擎的执行流程，并介绍了字节码在其中的作用。新版V8引擎重新引入字节码作为中间代码，以提高启动速度和降低内存占用。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/v8/13.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _13_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "13.html.vue"]]);
export {
  _13_html as default
};
