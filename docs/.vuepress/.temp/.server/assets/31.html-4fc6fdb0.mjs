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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="http3-甩掉tcp、tls的包袱-构建高效网络" tabindex="-1"><a class="header-anchor" href="#http3-甩掉tcp、tls的包袱-构建高效网络" aria-hidden="true">#</a> HTTP3：甩掉TCP、TLS的包袱，构建高效网络</h2><p>本文介绍了HTTP/2存在的问题，并介绍了HTTP/3的优化方式。</p><h3 id="http-2存在的问题" tabindex="-1"><a class="header-anchor" href="#http-2存在的问题" aria-hidden="true">#</a> HTTP/2存在的问题</h3><p>HTTP/2通过多路复用技术提高了页面资源的传输速度，但是依然存在TCP的队头阻塞问题。TCP最初是为单连接而设计的，因此数据会按顺序放入管道，最终以相同的顺序出现在另一端。这导致如果某个数据包丢失或延迟，后续数据包都必须等待。HTTP/2通过多路复用技术解决了应用层面的队头阻塞问题，但TCP依然存在这个问题。</p><h3 id="http-3的优化方式" tabindex="-1"><a class="header-anchor" href="#http-3的优化方式" aria-hidden="true">#</a> HTTP/3的优化方式</h3><p>HTTP/3采用QUIC协议，QUIC协议是一个基于UDP协议的协议，它可以实现多路复用、0-RTT连接建立等功能。相比于TCP，QUIC协议具有更好的流量控制和拥塞控制机制，并且支持快速握手和快速重传。QUIC协议还支持0-RTT连接建立，可以在客户端和服务器之间建立一个加密的连接，从而减少了握手时间。</p><p>HTTP/3采用TLS 1.3协议，TLS 1.3协议采用了更快的加密算法，从而减少了握手时间。TLS 1.3协议还采用了0-RTT握手模式，可以在客户端和服务器之间建立一个加密连接。</p><p>HTTP/3通过采用QUIC协议和TLS 1.3协议，解决了TCP的队头阻塞问题，并且提供了更快的连接建立和更快的加密算法。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/31.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _31_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "31.html.vue"]]);
export {
  _31_html as default
};
