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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_27-渐进式网页应用-pwa-它究竟解决了web应用的哪些问题" tabindex="-1"><a class="header-anchor" href="#_27-渐进式网页应用-pwa-它究竟解决了web应用的哪些问题" aria-hidden="true">#</a> 27-渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题？</h2><p>本文介绍了渐进式网页应用（PWA）的概念、特点和优势。PWA是渐进式的过渡方案，让Web应用能逐步具有本地应用的能力。采取渐进式可以降低站点改造的代价，使得站点逐步支持各项新技术，而不是一步到位。从技术角度来说，PWA技术也是一个渐进式的演化过程，在技术层面会一点点演进，比如逐渐提供更好的设备特性支持，不断优化更加流畅的动画效果，不断让页面的加载速度变得更快，不断实现本地应用的特性。</p><h3 id="pwa的特点包括" tabindex="-1"><a class="header-anchor" href="#pwa的特点包括" aria-hidden="true">#</a> PWA的特点包括：</h3><ul><li>可靠性：在网络环境差的情况下也能正常工作。</li><li>快速：快速响应用户的操作和交互。</li><li>轻量级：比传统App更小巧、更轻便。</li><li>可安装：用户可以将Web应用安装到主屏幕上，像原生应用一样使用。</li><li>可发现：PWA可以被搜索引擎索引，并且可以通过链接分享给其他人。</li></ul><h3 id="pwa的优势包括" tabindex="-1"><a class="header-anchor" href="#pwa的优势包括" aria-hidden="true">#</a> PWA的优势包括：</h3><ul><li>无需下载：用户不需要下载、安装App，直接在浏览器中使用即可。</li><li>节省流量：PWA使用Service Worker技术，在用户离线时也能工作，节省用户流量。</li><li>跨平台：PWA可以在多个平台上运行，不需要为每个平台单独开发应用程序。</li><li>易于维护：PWA使用Web技术开发，与传统Web应用程序使用相同的代码库和开发工具。</li><li>安全性高：PWA使用HTTPS协议进行通信，保证通信安全。</li></ul><p>总之，PWA是一种新型的Web应用程序开发方式，兼具Web应用和原生应用的优点，并且具有可靠性高、快速、轻量级、可安装、可发现等特点。对于Web应用开发者来说，PWA提供了一个渐进式的过渡方案，让Web应用能逐步具有本地应用的能力。对于用户来说，PWA无需下载、节省流量、跨平台、易于维护、安全性高等优势也使其成为越来越受欢迎的应用程序开发方式。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/27.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _27_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "27.html.vue"]]);
export {
  _27_html as default
};
