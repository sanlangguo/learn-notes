### vue react 区别

[参考链接](https://blog.csdn.net/xgangzai/article/details/115301290)

### vue响应式原理

  [vue官网解释](https://cn.vuejs.org/v2/guide/reactivity.html)


### vue文件编译原理

  [参考链接](https://forum.vuejs.org/t/vue-js-vue-js/60884)

### 计算属性 VS 监听属性

  ```
  watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
  computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。

  计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
  ```


### vue data 为什么是一个函数

```
  为了保证组件的独立性和可复用性，data 是一个函数，组件实例化的时候这个函数将会被调用，返回一个对象，计算机会给这个对象分配一个内存地址，你实例化几次，就分配几个内存地址，他们的地址都不一样，所以每个组件中的数据不会相互干扰，改变其中一个组件的状态，其它组件不变。
```

[参考链接](https://www.jianshu.com/p/b821d3401314)  
[参考链接](https://axiu.me/coding/why-vue-component-data-must-be-function/)

### vue文件编译原理/常见面试题

  [Vue中的模板编译原理 01](https://cloud.tencent.com/developer/article/1601614)

  [Vue模板编译原理 02](https://github.com/berwin/Blog/issues/18)

  [常见面试题](https://www.cnblogs.com/skywind/p/14653339.html#12-vuejs-%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8E%9F%E7%90%86)

  

### this.nextTick() 原理 100次更新dem 执行一次 (更新dom 为什么是异步的)

[参考链接](https://github.com/berwin/Blog/issues/22)


### vue-router hash history 核心理解

[参考链接](https://juejin.cn/post/6921965450742431758)

[参考链接](https://www.jianshu.com/p/3b4abc20ae0f)


### vue3 watcher 原理

[参考链接](https://originalix.github.io/2021/06/16/Vue3-%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90-%E5%8D%81-watch-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86/#)



### 为什么选用vuex, 不用 object 的根本原因

可以使用，vuex 提供的是一种完整的解决方案，看个人怎么选择，在团队开发当中，统一规范

[参考链接](https://vuex.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B%E6%88%91%E5%BA%94%E8%AF%A5%E4%BD%BF%E7%94%A8-vuex%EF%BC%9F)


### vue3 哪些变化

[参考链接](https://v3.cn.vuejs.org/guide/migration/introduction.html#%E6%A6%82%E8%A7%88)

### vue3 响应式原理

[参考链接](https://juejin.cn/post/6858899262596448270#heading-21)


### vue 组件传值
[vue组件之间相互传值的方式](https://segmentfault.com/a/1190000022700216)



### Vue3 组件挂载时

- 从高层面的视角看，Vue 组件挂载时会发生如下几件事：

1. **编译**：Vue 模板被编译为**渲染函数**：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。
2. **挂载**：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为[响应式副作用](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html)执行，因此它会追踪其中所用到的所有响应式依赖。
3. **更新**：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。

![render pipeline](https://cn.vuejs.org/assets/render-pipeline.sMZx_5WY.png)

### Vue2 渲染的过程

1. 通过new Vue 语句实例化 Vue 对象
2. 挂载$mount 方法,通过自定义 Render 方法、template、el 等生成 Reder 函数，准备渲染内容
3. 通过Watcher 进行依赖收集。
4. 当数据发生变化时，执行 Render 函数并生成 VNode 对象
5. 通过patch 方法，对比新旧 Node 对象，通过 DOM diff算法添加、修改、删除真正的 DOM元素。



