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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_32-同源策略-为什么xmlhttprequest不能跨域请求资源" tabindex="-1"><a class="header-anchor" href="#_32-同源策略-为什么xmlhttprequest不能跨域请求资源" aria-hidden="true">#</a> 32-同源策略：为什么XMLHttpRequest不能跨域请求资源？</h2><p>本文介绍了同源策略的概念以及为什么XMLHttpRequest不能跨域请求资源。</p><h3 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h3><p>同源策略是浏览器中的一项重要安全策略，用于限制一个源加载的文档或脚本如何与来自另一个源的资源进行交互。同源是指协议、域名和端口号都相同。</p><p>同源策略的目的是防止恶意网站窃取数据，例如一个恶意网站可以通过iframe标签嵌入一个合法网站，然后通过JavaScript获取合法网站的信息。</p><h3 id="xmlhttprequest不能跨域请求资源" tabindex="-1"><a class="header-anchor" href="#xmlhttprequest不能跨域请求资源" aria-hidden="true">#</a> XMLHttpRequest不能跨域请求资源</h3><p>XMLHttpRequest是用于在浏览器和服务器之间进行数据传输的API。由于同源策略的限制，XMLHttpRequest只能在相同的源中使用。如果尝试从一个源向另一个源发出请求，浏览器会阻止该请求。</p><p>例如，如果网站A尝试从网站B请求资源，由于它们不在同一个源中，XMLHttpRequest请求将被浏览器阻止。这是因为如果允许这样的请求，那么网站B的数据就可以被网站A窃取。</p><h3 id="解决跨域问题" tabindex="-1"><a class="header-anchor" href="#解决跨域问题" aria-hidden="true">#</a> 解决跨域问题</h3><p>虽然XMLHttpRequest不能跨域请求资源，但是可以通过其他方式解决跨域问题，例如JSONP、CORS和WebSocket等技术。这些技术都可以在不违反同源策略的情况下进行跨域资源共享。</p><ul><li>JSONP：利用script标签不受同源策略限制的特性，通过动态创建script标签并指定src属性，从而实现跨域请求。</li><li>JCORS：服务器端设置Access-Control-Allow-Origin响应头，允许指定的域名或所有域名访问该资源。</li><li>JWebSocket：WebSocket协议可以在不受同源策略限制的情况下建立跨域连接。</li></ul><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>本文讲解了同源策略的概念以及为什么XMLHttpRequest不能跨域请求资源。同时介绍了解决跨域问题的三种技术：JSONP、CORS和WebSocket。在开发Web应用时，需要了解同源策略并选择合适的技术来解决跨域问题。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/32.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _32_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "32.html.vue"]]);
export {
  _32_html as default
};
