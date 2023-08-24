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
            text: "TS 使用指南",
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
        text: "前端工程化",
        children: [
          {
            text: "webpack",
            link: "https://xxpromise.gitee.io/webpack5-docs/",
          },
          {
            text: "Lerna",
            link: "/engineering/lerna.md",
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
    sidebar: {
      '/tools/': [
        {
          text: '常用工具',
          link: "/tools/tl-list.md",
        }
      ],
      '/js/': [
        {
          text: 'TS入门学习记录',
          link: "/js/base-ts.md",
          children: [],
        }
      ],
      '/ts/': [
        {
          text: 'TS API 使用指南',
          children: [{
            text: 'readonly',
            link: "/ts/readonly.md",
          },
          {
            text: 'pick',
            link: "/ts/pick.md",
          },
          {
            text: 'type 和 interface 区别',
            link: "/ts/type.md",
          },
          {
            text: 'Exclude',
            link: "/ts/Exclude.md",
          },
          {
            text: 'Omit',
            link: "/ts/Omit.md",
          },
          {
            text: 'AppendArgument',
            link: "/ts/AppendArgument.md",
          },
          {
            text: 'Combination',
            link: "/ts/Combination.md",
          },
          {
            text: '合并Concat',
            link: "/ts/Concat.md",
          },
          ]
        }
      ],
      '/browser/': [
        {
          text: '浏览器原理学习笔记',
          children: [
            {
              text: '仅仅打开了1个页面，为什么有4个进程',
              link: "/browser/01.md",
            },
            {
              text: '如何保证页面文件能被完整送达浏览器',
              link: "/browser/02.md",
            },
            {
              text: '为什么很多站点第二次打开速度会很快',
              link: "/browser/03.md",
            },
            {
              text: '从输入URL到页面展示，这中间发生了什么',
              link: "/browser/04.md",
            },
            {
              text: '渲染流程（上）：HTML、CSS和JavaScript，是如何变成页面的',
              link: "/browser/05.md",
            },
            {
              text: '渲染流程（下）：HTML、CSS和JavaScript，是如何变成页面的',
              link: "/browser/06.md",
            },
            {
              text: '变量提升：JavaScript代码是按顺序执行的吗',
              link: "/browser/07.md",
            },
            {
              text: '调用栈：为什么JavaScript代码会出现栈溢出',
              link: "/browser/08.md",
            },
            {
              text: '块级作用域：var缺陷以及为什么要引入let和const',
              link: "/browser/09.md",
            },
            {
              text: '作用域链和闭包：代码中出现相同的变量，JavaScript引擎是如何选择的',
              link: "/browser/10.md",
            },
            {
              text: 'this：从JavaScript执行上下文的视角讲清楚this',
              link: "/browser/11.md",
            },
            {
              text: '栈空间和堆空间：数据是如何存储的',
              link: "/browser/12.md",
            },
            {
              text: '垃圾回收：垃圾数据是如何自动回收的',
              link: "/browser/13.md",
            },
            {
              text: '编译器和解释器：V8是如何执行一段JavaScript代码的',
              link: "/browser/14.md",
            },
            {
              text: '消息队列和事件循环：页面是怎么“活”起来的',
              link: "/browser/15.md",
            },
            {
              text: 'WebAPI：setTimeout是如何实现的',
              link: "/browser/16.md",
            },
            {
              text: 'WebAPI：XMLHttpRequest是怎么实现的',
              link: "/browser/17.md",
            },
            {
              text: '宏任务和微任务：不是所有任务都是一个待遇',
              link: "/browser/18.md",
            },
            {
              text: 'Promise：使用Promise，告别回调函数',
              link: "/browser/19.md",
            },

            {
              text: 'async-await：使用同步的方式去写异步代码',
              link: "/browser/20.md",
            },

            {
              text: 'Chrome开发者工具：利用网络面板做性能分析',
              link: "/browser/21.md",
            },

            {
              text: 'DOM树：JavaScript是如何影响DOM树构建的',
              link: "/browser/22.md",
            },

            {
              text: '渲染流水线：CSS如何影响首次加载时的白屏时间',
              link: "/browser/23.md",
            },

            {
              text: '分层和合成机制：为什么CSS动画比JavaScript高效',
              link: "/browser/24.md",
            },
            {
              text: '页面性能：如何系统地优化页面',
              link: "/browser/25.md",
            },
            {
              text: '虚拟DOM：虚拟DOM和实际的DOM有何不同',
              link: "/browser/26.md",
            },
            {
              text: '渐进式网页应用（PWA）：它究竟解决了Web应用的哪些问题',
              link: "/browser/27.md",
            },
            {
              text: 'WebComponent：像搭积木一样构建Web应用',
              link: "/browser/28.md",
            },
            {
              text: 'HTTP1：HTTP性能优化',
              link: "/browser/29.md",
            },

            {
              text: 'HTTP2：如何提升网络速度',
              link: "/browser/30.md",
            },

            {
              text: 'HTTP3：甩掉TCP、TLS的包袱，构建高效网络',
              link: "/browser/31.md",
            },
            {
              text: '同源策略：为什么XMLHttpRequest不能跨域请求资源',
              link: "/browser/32.md",
            },
            {
              text: '跨站脚本攻击（XSS）：为什么Cookie中有HttpOnly属性',
              link: "/browser/33.md",
            },
            {
              text: 'CSRF攻击：陌生链接不要随便点',
              link: "/browser/34.md",
            },
            {
              text: '安全沙箱：页面和系统之间的隔离墙',
              link: "/browser/35.md",
            },
            {
              text: 'HTTPS：让数据传输更安全',
              link: "/browser/36.md",
            },
          ],
        }
      ],
      '/v8/': [{
        text: 'v8学习笔记',
        children: [
          {
            text: 'V8是如何执行一段JavaScript代码的',
            link: "/v8/01.md",
          },
          {
            text: '函数即对象：一篇文章彻底搞懂JavaScript的函数特点',
            link: "/v8/02.md",
          },
          {
            text: '快属性和慢属性：V8是怎样提升对象属性访问速度的',
            link: "/v8/03.md",
          },
          {
            text: '函数表达式：涉及大量概念，函数表达式到底该怎么学',
            link: "/v8/04.md",
          },
          {
            text: '原型链：V8是如何实现对象继承的',
            link: "/v8/05.md",
          },
          {
            text: '作用域链：V8是如何查找变量的',
            link: "/v8/06.md",
          },
          {
            text: '类型转换：V8是怎么实现1-“2”的',
            link: "/v8/07.md",
          },
          {
            text: '如何构建和使用V8的调试工具d8',
            link: "/v8/08.md",
          },
          {
            text: '运行时环境：运行JavaScript代码的基石',
            link: "/v8/09.md",
          },
          {
            text: '机器代码：二进制机器码究竟是如何被CPU执行的',
            link: "/v8/10.md",
          },
          {
            text: '堆和栈：函数调用是如何影响到内存布局的',
            link: "/v8/11.md",
          },
          {
            text: '延迟解析：V8是如何实现闭包的',
            link: "/v8/12.md",
          },
          {
            text: '字节码（一）：V8为什么又重新引入字节码',
            link: "/v8/13.md",
          },
          {
            text: '字节码（二）：解释器是如何解释执行字节码的',
            link: "/v8/14.md",
          },
          {
            text: '隐藏类：如何在内存中快速查找对象属性',
            link: "/v8/15.md",
          },
          {
            text: 'V8是怎么通过内联缓存来提升函数执行效率的',
            link: "/v8/16.md",
          },
          {
            text: '消息队列：V8是怎么实现回调函数的',
            link: "/v8/17.md",
          },
          {
            text: '异步编程（一）：V8是如何实现微任务的',
            link: "/v8/18.md",
          },
          {
            text: '异步编程（二）：V8是如何实现async-await的',
            link: "/v8/19.md",
          },
          {
            text: '垃圾回收（一）：V8的两个垃圾回收器是如何工作的',
            link: "/v8/20.md",
          },
          {
            text: '垃圾回收（二）：V8是如何优化垃圾回收器执行效率的',
            link: "/v8/21.md",
          },
          {
            text: '几种常见内存问题的解决策略',
            link: "/v8/22.md",
          },
          {
            text: '前端学习踩坑史',
            link: "/v8/23.md",
          },
        ]
      }]
    }
  }),
  plugins: [autoCatalogPlugin()],
};
