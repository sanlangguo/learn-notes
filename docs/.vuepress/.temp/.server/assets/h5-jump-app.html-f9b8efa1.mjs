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
  _push(`<div${ssrRenderAttrs(_attrs)}><h3 id="h5-跳转应用市场" tabindex="-1"><a class="header-anchor" href="#h5-跳转应用市场" aria-hidden="true">#</a> H5 跳转应用市场</h3><p>只跳转到应用市场,这种场景是最简单容易实现的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;and&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;apk link url&#39;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&#39;ios&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;https://itunes.apple.com/cn/app/xxxx&#39;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="h5-跳转-app-原理" tabindex="-1"><a class="header-anchor" href="#h5-跳转-app-原理" aria-hidden="true">#</a> H5 跳转 APP 原理</h3><p>首先，不管 iOS 还是 Android，浏览器都不可能预知本地是否安装了某个 APP 的。或者更严谨地说，我们不能通过浏览器来预知本地是否安装。其次，本质上浏览器是通过 URL scheme 打开 APP，一个 APP 可以设置一个或多个打开自己的 URL scheme。比如，Twitter 就注册自己能被「twitter://」打开。</p><h3 id="针对-h5-跳转安卓-app-指定页面" tabindex="-1"><a class="header-anchor" href="#针对-h5-跳转安卓-app-指定页面" aria-hidden="true">#</a> 针对 H5 跳转安卓 APP 指定页面</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
根据我们的需求，不同业务场景进入页面不一样，因此需要客户端和 <span class="token constant">H5</span> 先约定，定义多个 scheme，才能跳转 app 指定页面或者打开 app<span class="token punctuation">,</span> 备注：vue

    <span class="token comment">// 该组件是公共下载页面，currentUrl 是上级页面完整地址，根据我们的业务场景需要记录下,也是因为用户在微信下，从上级页面进入到当前下载页这时需要用户在浏览器打开此页面，这时就需要 currentUrl，来记录上级页面地址</span>
    <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> roomNo<span class="token punctuation">,</span> currentUrl <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query<span class="token punctuation">;</span>
      <span class="token comment">// currentUrl 是 H5 的地址，需要在 app 内 打开 H5 地址，encode 是对中文或者特殊符号进行转译</span>
      currentUrl <span class="token operator">=</span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span><span class="token function">decodeURIComponent</span><span class="token punctuation">(</span>currentUrl<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> shareUrl
      <span class="token keyword">const</span> ua <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent
      <span class="token keyword">const</span> isAndroid <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?:Android)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&#39;A&#39;</span><span class="token operator">:</span>
          shareUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ytx://newapp/A?&amp;url=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
          <span class="token keyword">break</span>
        <span class="token keyword">case</span> <span class="token string">&#39;B&#39;</span><span class="token operator">:</span>
          shareUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ytx://newapp/B?roomNo=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>roomNo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
          <span class="token keyword">break</span>
      <span class="token punctuation">}</span>
     <span class="token comment">// 需要注意的是在微信环境下，不能直接跳转，这时需要引导用户到浏览器，才能唤醒 app,</span>
     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>inWechat<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 不是微信直接打开 app</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>shareUrl<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 其实页面跳转，location.href 也是可以的，根据业务场景可自己调整</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="h5-跳转-ios-app-指定页面" tabindex="-1"><a class="header-anchor" href="#h5-跳转-ios-app-指定页面" aria-hidden="true">#</a> H5 跳转 IOS APP 指定页面</h3><p>sharesdk 是 ios 借助第三方平台 (mob) ，通过第三方接受 H5 传的参数，来进行页面跳转处理</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span>style<span class="token operator">&gt;</span>
    <span class="token comment">// 隐藏 sharesdk 自定义下载样式，我们需求是单独设计的点击下载，所以要对第三方的样式禁用</span>
    <span class="token punctuation">.</span>mobLink<span class="token operator">-</span>wrapper <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> none <span class="token operator">!</span>important<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
    在 index<span class="token punctuation">.</span>html 中引入
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;https://arao.t4m.cn/sharesdk.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
      <span class="token comment">// 直接在下载</span>
      fuction <span class="token function">iosDownApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">&#39;mobLink-btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
    首页还是先约定好schemes， 和安卓一样，只不过，ios 我们是借助第三方实现。当自定义打开指定页面时，schemes 是自定义
    约定的参数。备注：vue
     <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>ios<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">ShareSDK</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">targetAction_iOS</span><span class="token operator">:</span> <span class="token string">&#39;MTNWebViewController&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">targetAction_And</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">other</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">schemes</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ytx://newapp/web?title=文章&amp;url=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/mobile/h5-jump-app.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const h5JumpApp_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "h5-jump-app.html.vue"]]);
export {
  h5JumpApp_html as default
};
