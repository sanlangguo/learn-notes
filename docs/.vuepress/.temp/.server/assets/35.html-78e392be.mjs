import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.bf7dc909.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_35-安全沙箱-页面和系统之间的隔离墙" tabindex="-1"><a class="header-anchor" href="#_35-安全沙箱-页面和系统之间的隔离墙" aria-hidden="true">#</a> 35-安全沙箱：页面和系统之间的隔离墙</h2><p>本文主要讨论浏览器架构如何影响操作系统安全。在单进程浏览器的架构中，所有的渲染过程、JavaScript执行过程、网络加载过程、UI绘制过程和页面显示过程都在同一个进程中执行，这样的架构存在很多问题，包括稳定性问题和安全问题。单进程浏览器的漏洞是其中一个主要问题，黑客可以通过恶意页面向浏览器中注入恶意程序，最常见的攻击方式是利用缓冲区溢出。这种类型的攻击和XSS注入的脚本是不一样的，XSS攻击只是将恶意的JavaScript脚本注入到页面中，虽然能窃取一些Cookie相关的数据，但是XSS无法对操作系统进行攻击。</p><p>相对于单进程浏览器，多进程浏览器在安全性方面更有优势。多进程浏览器将每个标签页和插件都分配到不同的进程中，这些进程之间相互隔离，互不干扰。如果其中一个进程出现异常，不会影响到其他进程的正常工作。同时，多进程浏览器还有一个重要的特性：安全沙箱。安全沙箱是一种隔离机制，可以将浏览器进程与操作系统隔离开来，保护操作系统不受到来自浏览器进程的恶意攻击。</p><p>安全沙箱是如何工作的呢？当用户在浏览器中打开一个新页面时，浏览器会为该页面创建一个新的进程，并将该页面与其他进程隔离开来。这个新进程只能访问浏览器提供的API，无法直接访问操作系统的API。如果这个页面中存在恶意代码，那么它只能影响到当前进程中的其他页面，而无法影响到其他进程或操作系统。此外，多进程浏览器还可以对每个进程进行权限控制，限制它们能够访问的资源和功能。</p><p>总之，多进程浏览器通过安全沙箱机制，将浏览器进程与操作系统隔离开来，保护了操作系统不受到来自浏览器进程的恶意攻击。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/35.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _35_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "35.html.vue"]]);
export {
  _35_html as default
};
