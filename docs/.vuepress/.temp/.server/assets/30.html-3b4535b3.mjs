import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../app.3b32e088.mjs";
import "@vuepress/shared";
import "ts-debounce";
import "vue-router";
import "@vueuse/core";
import "vuepress-shared/client";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_30-http2-如何提升网络速度" tabindex="-1"><a class="header-anchor" href="#_30-http2-如何提升网络速度" aria-hidden="true">#</a> 30-HTTP2：如何提升网络速度？</h2><p>本文介绍了HTTP/2的优化方式，分析了HTTP/1.1存在的问题，并解释了HTTP/2是如何解决这些问题的。</p><h3 id="http-1-1的优化方式" tabindex="-1"><a class="header-anchor" href="#http-1-1的优化方式" aria-hidden="true">#</a> HTTP/1.1的优化方式</h3><p>HTTP/1.1为网络效率做了大量的优化，主要包括：</p><ul><li>增加了持久连接；</li><li>浏览器为每个域名最多同时维护6个TCP持久连接；</li><li>使用CDN的实现域名分片机制。</li><li>这些优化方式大大提高了页面的下载速度，减少了页面加载时间。</li></ul><h3 id="http-1-1存在的问题" tabindex="-1"><a class="header-anchor" href="#http-1-1存在的问题" aria-hidden="true">#</a> HTTP/1.1存在的问题</h3><p>HTTP/1.1对带宽的利用率不理想，很难将带宽用满。比如，当我们拥有100M带宽时，实际的下载速度能达到12.5M/S，而采用HTTP/1.1时，在加载页面资源时最大只能使用到2.5M/S，很难将12.5M全部用满。</p><p>这是因为HTTP/1.1采用了串行传输方式，一个TCP连接只能传输一个请求和响应，而且请求和响应无法交错进行。这导致了TCP连接空闲时间过长，带宽资源得不到充分利用。</p><h3 id="http-2的解决方案" tabindex="-1"><a class="header-anchor" href="#http-2的解决方案" aria-hidden="true">#</a> HTTP/2的解决方案</h3><p>HTTP/2采用了多路复用技术，可以在一个TCP连接上同时传输多个请求和响应，且请求和响应可以交错进行。这样就充分利用了TCP连接的带宽资源，提高了带宽利用率。</p><p>此外，HTTP/2还采用了头部压缩、服务器推送等技术，进一步提高了网络性能。</p><p>总之，HTTP/2通过多路复用技术等方式解决了HTTP/1.1存在的性能瓶颈问题，提高了网络速度和性能。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/30.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _30_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "30.html.vue"]]);
export {
  _30_html as default
};
