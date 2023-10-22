## 记录 vite4.x vue3 打包优化

### 打包之前我们先梳理下vite 打包从哪些方面入手

1. 先对打包体积进行分析
2. 根据包体积分析的结果，做相应的优化，之后我们以下几个方面入手：
- 图片压缩
- gzip代码压缩
- 删除生产日志
- CDN 加速
- 按需导入



### 包分析
- 安装与使用

```js
1.安装 
npm i rollup-plugin-visualizer -D

2.vite.config.ts 引入
import { visualizer } from 'rollup-plugin-visualizer'

plugins: [visualizer({open: true})]

```

- 包分析
![vite打包分析](/img/vite-build.jpg)

### gzip代码压缩

- 安装与使用

```js
1.安装 
npm i vite-plugin-compression -D

2.vite.config.ts 引入
import viteCompression from 'vite-plugin-compression'

plugins: [viteCompression({
      threshold: 10240, // the unit is Bytes
  })
]

```

- 在服务器中开启 GZIP

开启 gzip 需要同时确保 Web 服务器已经开启了对应的 gzip 支持

- 以 nginx 为例：

```zsh
server {
  gzip on;
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
  gzip_min_length 10240;
  gzip_comp_level 6;
}

```

### 图片压缩

- 安装与使用

```js
1.安装 
npm i vite-plugin-imagemin -D

2.vite.config.ts 引入
import viteImagemin from 'vite-plugin-imagemin'

plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    })]
```


### esbuild 压缩模式下删除 console.log 和 debugger

```js
import {defineConfig} from "vite";
export default defineConfig({
    esbuild:{
        drop: ['console,'debugger'], // 删除 所有的console 和 debugger
    }
})

```

### CDN 加速
内容分发网络（CDN）是一种通过将内容分发到离用户最近的服务器来提高网络请求响应速度的技术。它还可以通过减少应用程序打包的文件大小、利用浏览器缓存以及长期缓存不变的文件来优化性能。请注意，在学习讨论中，不建议使用第三方CDN。

- 安装与使用

```js
1.安装 
npm i rollup-plugin-external-globals -D
npm i vite-plugin-html -D

2. html 中引入 CDN 文件
<head>
    <%- csscdn %>
    <%- vuescript %>
</head>

3.vite.config.ts 引入
import { createHtmlPlugin } from 'vite-plugin-html'


rollupOptions: {
  // 告诉打包工具 在external配置的 都是外部依赖项  不需要打包
  external: ['vue'],
  plugins: [
    externalGlobals({
      // "在项目中引入的变量名称"："CDN包导出的名称，一般在CDN包中都是可见的"
      vue: 'Vue'
    })
  ]
}


plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          vuescript: '<script src="https://cdn.jsdelivr.net/npm/vue@3.3.4"></script>'
          csscdn: '<link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css"></script>'
        }
      }
    })
]


```


### 按需导入
- 例如 lodash-es (其实lodash-es 是 lodash 的 es modules 版本 ，是着具备 ES6 模块化的版本，体积小，而lodash是common.js版本)

```js
import { cloneDeep } from 'lodash-es'; // 你将会把引入cloneDeep引入到项目
```


### 代码分割策略
1. vite2.9 之后更细粒度地控制代码分割策略，就得使用 manualChunks 配置，使用方式大概如下

```js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        /**
         * 1.以对象的方式使用
         * 将 lodash 模块打包成一个 chunk，名称是 lodash
         */
         manualChunks: {
           lodash: ['lodash'],
         },

        /**
         * 2.以函数的形式使用
         * 将第三方包全部打包在一个chunk中，名称叫 vendor
         */
        manualChunks(id, { getModuleInfo, getModuleIds }) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});

```

2. 使用 vite-plugin-chunk-split 插件

```js

// use npm
npm i vite-plugin-chunk-split -D
// use yarn
yarn add vite-plugin-chunk-split -D
// use pnpm
pnpm i vite-plugin-chunk-split -D


// vite.config.ts
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

{
  plugins: [
    // ...
    chunkSplitPlugin()
  ]
}
```

[更多配置参考github](https://github.com/sanyuan0704/vite-plugin-chunk-split/blob/HEAD/README-CN.md#vite-plugin-chunk-split)




