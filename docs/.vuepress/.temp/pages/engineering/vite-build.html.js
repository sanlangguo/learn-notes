export const data = JSON.parse("{\"key\":\"v-bf04d2c2\",\"path\":\"/engineering/vite-build.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"记录 vite4.x vue3 打包优化\",\"slug\":\"记录-vite4-x-vue3-打包优化\",\"link\":\"#记录-vite4-x-vue3-打包优化\",\"children\":[{\"level\":3,\"title\":\"打包之前我们先梳理下vite 打包从哪些方面入手\",\"slug\":\"打包之前我们先梳理下vite-打包从哪些方面入手\",\"link\":\"#打包之前我们先梳理下vite-打包从哪些方面入手\",\"children\":[]},{\"level\":3,\"title\":\"包分析\",\"slug\":\"包分析\",\"link\":\"#包分析\",\"children\":[]},{\"level\":3,\"title\":\"gzip代码压缩\",\"slug\":\"gzip代码压缩\",\"link\":\"#gzip代码压缩\",\"children\":[]},{\"level\":3,\"title\":\"图片压缩\",\"slug\":\"图片压缩\",\"link\":\"#图片压缩\",\"children\":[]},{\"level\":3,\"title\":\"esbuild 压缩模式下删除 console.log 和 debugger\",\"slug\":\"esbuild-压缩模式下删除-console-log-和-debugger\",\"link\":\"#esbuild-压缩模式下删除-console-log-和-debugger\",\"children\":[]},{\"level\":3,\"title\":\"CDN 加速\",\"slug\":\"cdn-加速\",\"link\":\"#cdn-加速\",\"children\":[]},{\"level\":3,\"title\":\"按需导入\",\"slug\":\"按需导入\",\"link\":\"#按需导入\",\"children\":[]},{\"level\":3,\"title\":\"代码分割策略\",\"slug\":\"代码分割策略\",\"link\":\"#代码分割策略\",\"children\":[]}]}],\"git\":{\"updatedTime\":1697988256000,\"contributors\":[{\"name\":\"三郎过\",\"email\":\"SanLangGuo@outlook.com\",\"commits\":1}]},\"filePathRelative\":\"engineering/vite-build.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
