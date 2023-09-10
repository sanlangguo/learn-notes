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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_03-http请求流程-为什么很多站点第二次打开速度会很快" tabindex="-1"><a class="header-anchor" href="#_03-http请求流程-为什么很多站点第二次打开速度会很快" aria-hidden="true">#</a> 03-HTTP请求流程：为什么很多站点第二次打开速度会很快？</h2><p>本文介绍了HTTP协议的基本概念和请求过程，并解答了一些常见问题，如为什么第一次访问站点速度慢，第二次很快，以及如何实现登录状态的保持等。</p><h4 id="http协议" tabindex="-1"><a class="header-anchor" href="#http协议" aria-hidden="true">#</a> HTTP协议</h4><p>HTTP是建立在TCP连接之上的协议，用于浏览器向服务器获取资源，如HTML、CSS、JS、图片、视频等。HTTP也是浏览器使用最广的协议。</p><h4 id="浏览器端发起http请求流程" tabindex="-1"><a class="header-anchor" href="#浏览器端发起http请求流程" aria-hidden="true">#</a> 浏览器端发起HTTP请求流程</h4><ul><li>构建请求行信息，如 GET /index.html HTTP1.1。</li><li>查找缓存，如果有缓存则直接返回并结束请求。</li><li>准备IP地址和端口，通过TCP与服务器建立连接。</li><li>发送请求，包括请求头和请求体。</li><li>接收响应，包括响应头和响应体。</li><li>处理响应，根据响应头信息判断响应是否成功，并解析响应体获取资源。</li><li>断开连接，释放资源。</li></ul><h4 id="常见问题解答" tabindex="-1"><a class="header-anchor" href="#常见问题解答" aria-hidden="true">#</a> 常见问题解答</h4><ul><li>为什么第一次访问站点速度慢，第二次很快？</li></ul><p>第一次访问时需要建立TCP连接、发送请求、接收响应等操作，而第二次访问时可以利用缓存，直接返回资源副本，省去了一些操作，因此速度更快。</p><ul><li>如何实现登录状态的保持？</li></ul><p>用户登录后，服务器会在响应头中添加 Set-Cookie 字段，并设置一个唯一的标识符（如用户ID），浏览器会将该标识符保存在本地，下次访问该站点时会自动在请求头中添加 Cookie 字段，将标识符发送给服务器，从而实现登录状态的保持。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/03.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _03_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "03.html.vue"]]);
export {
  _03_html as default
};
