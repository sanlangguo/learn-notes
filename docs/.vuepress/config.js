import { defaultTheme } from "vuepress";
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
        ],
      },
      { text: "github", link: "https://github.com/sanlangguo/learn-notes" },
    ],
  }),
};
