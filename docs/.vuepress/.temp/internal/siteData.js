export const siteData = JSON.parse("{\"base\":\"/learn-notes/\",\"lang\":\"en-US\",\"title\":\"三郎过\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/img/logo.jpg\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
