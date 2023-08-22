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
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="_34-csrf攻击-陌生链接不要随便点" tabindex="-1"><a class="header-anchor" href="#_34-csrf攻击-陌生链接不要随便点" aria-hidden="true">#</a> 34-CSRF攻击：陌生链接不要随便点</h2><h3 id="csrf攻击" tabindex="-1"><a class="header-anchor" href="#csrf攻击" aria-hidden="true">#</a> CSRF攻击</h3><p>跨站请求伪造（CSRF）是指黑客利用用户的登录状态，在用户毫不知情的情况下，向目标网站发送恶意请求，从而实现攻击的一种手段。黑客通过各种手段引诱用户点击恶意链接，从而在用户浏览器中植入伪造请求，当用户访问目标网站时，伪造请求会自动发送给目标网站，从而实现攻击。CSRF攻击的危害包括窃取用户信息、篡改用户数据等。</p><h3 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析" aria-hidden="true">#</a> 案例分析</h3><p>文章结合一个真实的案例分析了CSRF攻击的具体过程。黑客通过设置邮件过滤器，将用户所有的邮件都转发到黑客的邮箱中，从而获取到用户的邮件内容。接着黑客就可以去域名服务商那边重置用户的域名账户的密码，重置好密码之后，就可以将其转出到黑客的账户了。</p><h3 id="防范措施" tabindex="-1"><a class="header-anchor" href="#防范措施" aria-hidden="true">#</a> 防范措施</h3><ul><li><p>使用Token验证：在表单中添加一个随机生成的Token值，当提交表单时，服务器会验证Token值是否一致。攻击者无法伪造Token值，因此无法进行攻击。</p></li><li><p>使用验证码：在进行敏感操作时，要求用户输入验证码。攻击者无法伪造验证码，因此无法进行攻击。</p></li><li><p>禁用Cookie跨域传递：在Cookie中添加SameSite属性，限制Cookie只能在同一站点内使用。这样就可以防止攻击者通过Cookie进行跨站请求伪造。</p></li><li><p>不要点击陌生链接：尤其是那些看起来可疑或不信任的链接，不要轻易点击。如果必须点击，则应该先确认链接是否安全。</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/browser/34.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _34_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "34.html.vue"]]);
export {
  _34_html as default
};
