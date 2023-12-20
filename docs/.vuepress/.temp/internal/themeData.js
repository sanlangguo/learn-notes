export const themeData = JSON.parse("{\"logo\":\"/img/logo.jpg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/nav/list.md\"},{\"text\":\"动画\",\"children\":[{\"text\":\"初识 WebGL\",\"link\":\"/js/WebGL_01.md\"}]},{\"text\":\"JS\",\"children\":[{\"text\":\"js常见问题汇总\",\"link\":\"/js/js.md\"},{\"text\":\"TS入门学习记录\",\"link\":\"/js/base-ts.md\"},{\"text\":\"TS 使用指南\",\"link\":\"/ts/list.md\"}]},{\"text\":\"http\",\"link\":\"/http/index.md\"},{\"text\":\"前端框架\",\"children\":[{\"text\":\"nuxt3\",\"link\":\"/nuxt/index.md\"},{\"text\":\"vue 常见问题汇总\",\"link\":\"/vue/vue.md\"},{\"text\":\"vue3\",\"link\":\"/vue/v2-v3.md\"},{\"text\":\"vue3设计与实现\",\"link\":\"/vue/devise-realization.md\"},{\"text\":\"react系统知识梳理\",\"link\":\"/react/contrast.md\"}]},{\"text\":\"前端工程化\",\"children\":[{\"text\":\"vue3 vite 打包优化\",\"link\":\"/engineering/vite-build.md\"},{\"text\":\"webpack\",\"link\":\"https://xxpromise.gitee.io/webpack5-docs/\"},{\"text\":\"Lerna\",\"link\":\"/engineering/lerna.md\"},{\"text\":\"ios 真机调试\",\"link\":\"/engineering/ios.md\"}]},{\"text\":\"常用工具\",\"children\":[{\"text\":\"前端学习常用网站\",\"link\":\"/tools/tl-list.md\"},{\"text\":\"工作中常用工具网站\",\"link\":\"/tools/user-tools.md\"}]},{\"text\":\"浏览器\",\"link\":\"/browser/01.md\",\"children\":[{\"text\":\"浏览器原理(极客时间)\",\"link\":\"/browser/list.md\"},{\"text\":\"V8原理(极客时间)\",\"link\":\"/v8/list.md\"},{\"text\":\"微信公众号经验记录\",\"link\":\"/browser/wechat.md\"}]},{\"text\":\"github\",\"link\":\"https://github.com/sanlangguo/learn-notes\"}],\"sidebar\":\"auto\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
