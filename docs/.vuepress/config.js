import { defaultTheme } from "vuepress";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
module.exports = {
  title: "三郎过",
  base: "/learn-notes/",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  head: [["link", { rel: "icon", href: "/img/logo.jpg" }]],
  theme: defaultTheme({
    logo: "/img/logo.jpg",
    navbar: [
      { text: "首页", link: "/nav/list.md" },
      {
        text: "JS",
        children: [
          {
            text: "TS入门学习记录",
            link: "/js/base-ts.md",
          },
          {
            text: 'TS 使用指南',
            link: "/ts/readonly.md",
          }
        ],
      },
      {
        text: "前端框架",
        children: [
          {
            text: "vue3",
            link: "/vue/v2-v3.md",
          },
          {
            text: "vue3设计与实现",
            link: "/vue/devise-realization.md",
          }, {
            text: "react系统知识梳理",
            link: "/react/contrast.md",
          },
        ],
      },
      {
        text: "构建工具",
        children: [
          {
            text: "webpack",
            link: "https://xxpromise.gitee.io/webpack5-docs/",
          },
        ],
      },
      {
        text: "常用工具",
        children: [
          {
            text: "前端学习常用网站",
            link: "/tools/tl-list.md",
          },
          {
            text: "工作中常用工具网站",
            link: "/tools/user-tools.md",
          },
        ],
      },
      {
        text: "浏览器",
        link: "/browser/01.md",
        children: [
          {
            text: "浏览器原理(极客时间)",
            link: "/browser/01.md",
          },
          {
            text: "V8原理(极客时间)",
            link: "/v8/01.md",
          },
        ],
      },
      { text: "github", link: "https://github.com/sanlangguo/learn-notes" },
    ],
    sidebar: 'auto'
  }),
  plugins: [autoCatalogPlugin()],
};
