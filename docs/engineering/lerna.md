### lerna 解决 vue3 组件共享问题

[之前写过记录过 react 相关项目](https://github.com/sanlangguo/learn-notes/issues/25)

[当前 vue3 + ts + lerna github dom 地址](https://github.com/sanlangguo/lerna-vue3-dom)

#### 背景

Lerna 可以解决在拥有多个相关组件的项目中，统一管理这些组件的版本、依赖和发布。它可以帮助开发者更方便地进行组件开发和维护，同时提高项目的可维护性和可重复性。为了统一技术栈,现在公司项目要把之前 lerna react 项目统一改成 lerna vue3 + ts

#### 如何使用

- lerna 安装过程可参考官网教程即可

#### 项目目录结构

![整个项目目录结构](/img/lerna-nav.png)

- lerna 添加 common 和 vue-project

```js

lerna create common

```

![common目录结构](/img/lerna-common-nav.png)

- vue3 + ts 安装参考官网即可


- vue-project 引入 common

```
lerna add @mono-repo/common --scope @mono-repo/vue-project
```

- 安装成功后, 在 vue-project 的 package.json

```json
"dependencies": {
  "@mono-repo/common": "^0.0.0",
}
```

- 在 vue-project app.vue 中 使用

```ts

<script setup lang="ts">
import Button from "@mono-repo/common/components/Button"; // 引入公共组件

</script>

<template>
  <header>
    <Button />
    <div>6666</div>
  </header>
</template>

<style>

@import url("@mono-repo/common/assets/style/theme.css"); // 引入公共样式

</style>


```
