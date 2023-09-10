export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"学习笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"学习笔记\",\"author\":\"三郎过\",\"date\":\"2023-06-7\"},\"headers\":[],\"git\":{\"updatedTime\":1693233491000,\"contributors\":[{\"name\":\"三郎过\",\"email\":\"SanLangGuo@outlook.com\",\"commits\":2},{\"name\":\"陈宗强(融汇/产品技术中心)\",\"email\":\"zongqiang.chen@yintech.cn\",\"commits\":2}]},\"filePathRelative\":\"README.md\"}")

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
