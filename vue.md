### vue 面试总结

* vue响应式原理

  [vue官网解释](https://cn.vuejs.org/v2/guide/reactivity.html)


* vue文件编译原理
 
  [参考链接](https://forum.vuejs.org/t/vue-js-vue-js/60884)

* 计算属性 VS 监听属性
 
  ```
  watch：监测的是属性值， 只要属性值发生变化，其都会触发执行回调函数来执行一系列操作。
  computed：监测的是依赖值，依赖值不变的情况下其会直接读取缓存进行复用，变化的情况下才会重新计算。

  计算属性适合用在模板渲染中，某个值是依赖了其它的响应式对象甚至是计算属性计算而来；而侦听属性适用于观测某个值的变化去完成一段复杂的业务逻辑。
  ```

* this.nextTick 的理解


```
```

* vue data 为什么是一个函数
```
  为了保证组件的独立性和可复用性，data 是一个函数，组件实例化的时候这个函数将会被调用，返回一个对象，计算机会给这个对象分配一个内存地址，你实例化几次，就分配几个内存地址，他们的地址都不一样，所以每个组件中的数据不会相互干扰，改变其中一个组件的状态，其它组件不变。
```
[参考链接](https://www.jianshu.com/p/b821d3401314)  
[参考链接](https://axiu.me/coding/why-vue-component-data-must-be-function/)