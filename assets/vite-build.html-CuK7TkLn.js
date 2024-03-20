import{_ as a,r as e,o as p,c as t,a as n,b as l,d as i,e as o}from"./app-B-42ZPY7.js";const c="/learn-notes/img/vite-build.jpg",r={},u=o(`<h2 id="记录-vite4-x-vue3-打包优化" tabindex="-1"><a class="header-anchor" href="#记录-vite4-x-vue3-打包优化" aria-hidden="true">#</a> 记录 vite4.x vue3 打包优化</h2><h3 id="打包之前我们先梳理下vite-打包从哪些方面入手" tabindex="-1"><a class="header-anchor" href="#打包之前我们先梳理下vite-打包从哪些方面入手" aria-hidden="true">#</a> 打包之前我们先梳理下vite 打包从哪些方面入手</h3><ol><li>先对打包体积进行分析</li><li>根据包体积分析的结果，做相应的优化，之后我们以下几个方面入手：</li></ol><ul><li>图片压缩</li><li>gzip代码压缩</li><li>删除生产日志</li><li>CDN 加速</li><li>按需导入</li></ul><h3 id="包分析" tabindex="-1"><a class="header-anchor" href="#包分析" aria-hidden="true">#</a> 包分析</h3><ul><li>安装与使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>安装 
npm i rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>visualizer <span class="token operator">-</span><span class="token constant">D</span>

<span class="token number">2</span><span class="token punctuation">.</span>vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts 引入
<span class="token keyword">import</span> <span class="token punctuation">{</span> visualizer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-visualizer&#39;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">visualizer</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>包分析 <img src="`+c+`" alt="vite打包分析"></li></ul><h3 id="gzip代码压缩" tabindex="-1"><a class="header-anchor" href="#gzip代码压缩" aria-hidden="true">#</a> gzip代码压缩</h3><ul><li>安装与使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>安装 
npm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>compression <span class="token operator">-</span><span class="token constant">D</span>

<span class="token number">2</span><span class="token punctuation">.</span>vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts 引入
<span class="token keyword">import</span> viteCompression <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-compression&#39;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">viteCompression</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span> <span class="token comment">// the unit is Bytes</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在服务器中开启 GZIP</li></ul><p>开启 gzip 需要同时确保 Web 服务器已经开启了对应的 gzip 支持</p><ul><li>以 nginx 为例：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  <span class="token function">gzip</span> on<span class="token punctuation">;</span>
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript<span class="token punctuation">;</span>
  gzip_min_length <span class="token number">10240</span><span class="token punctuation">;</span>
  gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图片压缩" tabindex="-1"><a class="header-anchor" href="#图片压缩" aria-hidden="true">#</a> 图片压缩</h3><ul><li>安装与使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>安装 
npm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>imagemin <span class="token operator">-</span><span class="token constant">D</span>

<span class="token number">2</span><span class="token punctuation">.</span>vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts 引入
<span class="token keyword">import</span> viteImagemin <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-imagemin&#39;</span>

<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteImagemin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">gifsicle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
        <span class="token literal-property property">interlaced</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">optipng</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">optimizationLevel</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">mozjpeg</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">pngquant</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token number">0.9</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">speed</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">svgo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeViewBox&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;removeEmptyAttrs&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="esbuild-压缩模式下删除-console-log-和-debugger" tabindex="-1"><a class="header-anchor" href="#esbuild-压缩模式下删除-console-log-和-debugger" aria-hidden="true">#</a> esbuild 压缩模式下删除 console.log 和 debugger</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>defineConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">esbuild</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">drop</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;console,&#39;</span><span class="token keyword">debugger</span>&#39;<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 删除 所有的console 和 debugger</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn-加速" tabindex="-1"><a class="header-anchor" href="#cdn-加速" aria-hidden="true">#</a> CDN 加速</h3><p>内容分发网络（CDN）是一种通过将内容分发到离用户最近的服务器来提高网络请求响应速度的技术。它还可以通过减少应用程序打包的文件大小、利用浏览器缓存以及长期缓存不变的文件来优化性能。请注意，在学习讨论中，不建议使用第三方CDN。</p><ul><li>安装与使用</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span>安装 
npm i rollup<span class="token operator">-</span>plugin<span class="token operator">-</span>external<span class="token operator">-</span>globals <span class="token operator">-</span><span class="token constant">D</span>
npm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>html <span class="token operator">-</span><span class="token constant">D</span>

<span class="token number">2.</span> html 中引入 <span class="token constant">CDN</span> 文件
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> csscdn <span class="token operator">%</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> vuescript <span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>

<span class="token number">3</span><span class="token punctuation">.</span>vite<span class="token punctuation">.</span>config<span class="token punctuation">.</span>ts 引入
<span class="token keyword">import</span> <span class="token punctuation">{</span> createHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-html&#39;</span>


<span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// 告诉打包工具 在external配置的 都是外部依赖项  不需要打包</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">externalGlobals</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// &quot;在项目中引入的变量名称&quot;：&quot;CDN包导出的名称，一般在CDN包中都是可见的&quot;</span>
      <span class="token literal-property property">vue</span><span class="token operator">:</span> <span class="token string">&#39;Vue&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


<span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">createHtmlPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">minify</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">vuescript</span><span class="token operator">:</span> <span class="token string">&#39;&lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@3.3.4&quot;&gt;&lt;/script&gt;&#39;</span>
          <span class="token literal-property property">csscdn</span><span class="token operator">:</span> <span class="token string">&#39;&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/element-plus/dist/index.css&quot;&gt;&lt;/script&gt;&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按需导入" tabindex="-1"><a class="header-anchor" href="#按需导入" aria-hidden="true">#</a> 按需导入</h3><ul><li>例如 lodash-es (其实lodash-es 是 lodash 的 es modules 版本 ，是着具备 ES6 模块化的版本，体积小，而lodash是common.js版本)</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cloneDeep <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 你将会把引入cloneDeep引入到项目</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="代码分割策略" tabindex="-1"><a class="header-anchor" href="#代码分割策略" aria-hidden="true">#</a> 代码分割策略</h3><ol><li>vite2.9 之后更细粒度地控制代码分割策略，就得使用 manualChunks 配置，使用方式大概如下</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">build</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rollupOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 1.以对象的方式使用
         * 将 lodash 模块打包成一个 chunk，名称是 lodash
         */</span>
         <span class="token literal-property property">manualChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token literal-property property">lodash</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token doc-comment comment">/**
         * 2.以函数的形式使用
         * 将第三方包全部打包在一个chunk中，名称叫 vendor
         */</span>
        <span class="token function">manualChunks</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> <span class="token punctuation">{</span> getModuleInfo<span class="token punctuation">,</span> getModuleIds <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token string">&#39;vendor&#39;</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 vite-plugin-chunk-split 插件</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token comment">// use npm</span>
npm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>chunk<span class="token operator">-</span>split <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// use yarn</span>
yarn add vite<span class="token operator">-</span>plugin<span class="token operator">-</span>chunk<span class="token operator">-</span>split <span class="token operator">-</span><span class="token constant">D</span>
<span class="token comment">// use pnpm</span>
pnpm i vite<span class="token operator">-</span>plugin<span class="token operator">-</span>chunk<span class="token operator">-</span>split <span class="token operator">-</span><span class="token constant">D</span>


<span class="token comment">// vite.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> chunkSplitPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-chunk-split&#39;</span><span class="token punctuation">;</span>

<span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">chunkSplitPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),d={href:"https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/HEAD/README-CN.md#vite-plugin-chunk-split",target:"_blank",rel:"noopener noreferrer"};function v(k,m){const s=e("ExternalLinkIcon");return p(),t("div",null,[u,n("p",null,[n("a",d,[l("更多配置参考github"),i(s)])])])}const g=a(r,[["render",v],["__file","vite-build.html.vue"]]);export{g as default};
