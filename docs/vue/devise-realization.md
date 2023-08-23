
# Vue.js 设计与实现

## ① 框架设计概览

### 第一章：权衡的艺术

- 命令式 和 声明式

	- 命令式：关注过程
    ![关注过程](/img/vue-command.jpg)
	- 声明式：关注结果
    ![关注结果](/img/vue-declare.jpg)

- vue 封装了命令式的过程，对外暴露出了声明式的结果


- 性能与可维护性的权衡

	- 命令式 与 声明式

		- 命令式

			- 直接修改的性能消耗

		- 声明式

			- 找出差异 + 直接修改

        - 命令式的性能 > 声明式的性能

        - 声明式的可维护性 >> 命令式的可维护性

	- 原生 JavaScript、innerHTML、虚拟 DOM

		- 心智负担

			- 虚拟 DOM < innerHTML < 原生 JavaScript

		- 性能

			- innerHTML < 虚拟 DOM < 原生 JavaScript

		- 可维护性

			- 原生 JavaScript < innerHTML < 虚拟 DOM

        ![](/img/vue-vnode.jpg)

- 运行时 和 编译时

	- 运行时：runtime

		- 利用 render 函数，直接把 虚拟 DOM  转化为 真实 DOM 元素

		- 没有编译过程，无法分析用户提供的内容

	- 编译时：compiler

		- 直接把 template 模板中的内容，转化为 真实 DOM 元素

		- 可以分析用户提供的内容，没有运行时理论上性能会更好

	- 运行时 + 编译时

		- ① 先把 template 模板转化为 render 函数
		- ② 再利用 render 函数，把 虚拟 DOM 转化为 真实 DOM
    - vue 
        - 编译时：分析用户提供的内容,
        - 运行时：提供足够的灵活性

### 第二章：框架设计的核心要素

- 控制代码体积

	- 环境变量

		- __DEV__

	- Tree-Shaking

		- ESM（ES Module）

- 输出不同的构建产物

	- packages/vue/dist

- 错误提示与处理

	- 统一的错误处理接口：callWithErrorHandling

- 提升用户的开发体验

	- 心智负担低
	- 便于调试

- 良好的可维护性

	- 框架本身的可维护性：使用 TS 编写
	- 对 TS 的友好支持：大量的类型判断与处理

### 第三章：Vue.js 3 的设计思路

- 描述 UI 的形式

	- 声明式的模板描述

    ![](/img/vue-temp-description.jpg)

	- 命令式的 render 函数
    ![](/img/vue-h.jpg)


- 初始渲染器

	- 本质

		- 函数 createRenderer 的返回值（renderer 对象）

	- renderer 对象

		- 包含 render 渲染函数

			- 参数

				- vnode：虚拟 DOM 对象
				- container：挂载的容器，真实 DOM 元素

			- 作用

				- 把 vnode 挂载到 container 上

- 组件的本质

	- 一组 DOM 元素的封装
    > 一个 JavaScript 对象（vnode），内部封装了 DOM 元素

- 模板（template） 的工作原理

	- 声明式的模板描述

    ![](/img/vue-temp-description.jpg)

	- 命令式的 render 函数
    ![](/img/vue-h.jpg)

    - Vue3 中的模板（template）是通过将模板编译为渲染函数来工作的。在编译过程中，Vue3 将模板转换为可执行的渲染函数，这个函数将用于渲染组件的虚拟 DOM 树。这种方法使得 Vue3 的渲染性能得到了很大的提升。同时，Vue3 还引入了一种新的语法糖——`<script setup>`，可以更加方便地编写组件逻辑。

## ② 响应式系统

### 第四章：响应系统的作用与实现

- 副作用函数 与 响应式数据

	- 副作用函数

		- 会产生副作用的函数

	- 响应式数据

		- 会导致视图变化的数据

- 响应式数据的实现

	- 核心逻辑

		- 数据读取：getter 行为
        ```js
        document.body.innerText = obj.text
        ```
		- 数据修改：setter 行为

        ```js
        obj.text = 'hello vue3'
        ```
    - 核心 API

        - vue2 Object.defineProperty

        - vue3 Proxy

	- 图示

		- getter 行为
        ![](/img/vue-get.jpg)
		- setter 行为
        ![](/img/vue-set.jpg)


- 调度系统（scheduler）

	- 响应性的可调度性

		- 当数据更新的动作，触发副作用函数重新执行时，有能力决定：副作用函数（effect）执行的时机、次数以及方式
           
            ```js
            1
            2
            '结束'

            假设有需求变更，调整输出顺序
             1
            '结束'
            2
            ```

			- 有能力调整输出顺序

	- 实现原理, 基于 Set 构建了队列 jobQueue，利用 Promise 的异步特性，控制执行顺序

		- 异步：Promise
		- 队列：jobQueue

- 计算属性（computed） 

	- 本质

		- 一个属性值，当依赖的响应式数据发生变化时，重新计算

	- 计算属性的实现原理:调度系统（scheduler)

- 惰性执行（lazy）
    - boolean 型的值，可以被添加到 effect 函数中，用来控制副作用的执行
```js
if (!lazy) {
    // 执行副作用
}
```
	
- watch 的实现原理

	- 本质

		- 观测一个响应式数据，当数据发生变化时，通知并执行相应的回调函数

	- 实现原理: 调度系统（scheduler)

- 过期的副作用
	- 竞态问题
    ```js
    let finalData
    
    watch(obj, async () => {
        // 发送并等待网络请求

        const res = await fetch('/path/to/request')
        // 将请求结果赋值给 data

        finalData = res
    })
    ```

    ![](/img/vue-race.jpg)

    

	- 在描述一个系统或者进程的输出，依赖于不受控制的事件出现顺序或者出现时机

	- 解决方式
        ```js
            watch(obj，async (newValue，oldValue, onInvalidate) => {
                // 定义一个标志，代表当前副作用函数是否过期，默认为 false,代表没有过期
                let expired = false
                // 调用 onInvalidate 函数注册一个过期回调
                onInvalidate(() => {
                    // 当过期时，将 expired 设置为 true
                    expired = true
                })
                // 发送网络请求
                const res = await fetch('/path/to/request')
                // 只有当该副作用函数的执行没有过期时，才会执行后续操作
                if (!expired) {
                    finalData = res
                }
            })
        ```

		- onInvalidate：该回调函数会在副作用下一次重新执行前调用，可以用来清除无效的副作用，例如等待中的异步请求

	- onInvalidate 原理

		- 副作用函数（effct）重新执行前，先触发 onInvalidate

### 第五章：非原始值（对象）的响应性方案

- Proxy

	- 代理一个对象（被代理对象）的 getter 和 setter 行为，得到一个 proxy 实例（代理对象）

- Reflect

	- 在 Proxy 中使用 this 时，保证 this 指向 proxy，从而正确执行次数的副作用

### 第六章：原始值（非对象）的响应性方案

- 为什么会有 ref

	- ① reactive 方法基于 Proxy 实现，所以只能完成 对象 的响应性
	- ② 针对 非对象 的响应性，则需要 ref 构建

- 实现原理

	- 通过 get 、set  函数标记符，让函数以属性调用的形式被触发
        ![](/img/vue-ref.jpg)
		- packages/reactivity/src/ref.ts
		- 当访问 ref.value 属性时，本质上是  value() 函数的执行

## ③ 渲染器

### 第七章：渲染器的设计

- 渲染器的基本概念

	- 渲染器与渲染函数

		- 渲染器：renderer
		- 渲染函数：render
    ```js
        function createRenderer() {
            function render(vnode, container) {
                // ...
            }
            function hydrate(vnode, container) {
                // ..
            }
            return {
                render,
                hydrate
            }
        }
    ```
    - renderer：createRenderer 的返回值; render：createRenderer 中的 render 函数

- 自定义渲染器核心思路

	- ① 在浏览器端，利用 DOM API 完成 DOM 操作
	- ② 渲染器不能与宿主环境（浏览器）产生强耦合

- vnode

    ```js
    const vnode = {
        type: 'div', // 普通标签
        type: 'Fragment', // 代码片段
        type: 'text' // 文本
        // ....
    }

    ```

	- 一个普通的 JavaScript 对象，代表了渲染的内容

### 第八章：挂载与更新

- DOM节点操作

	- 挂载

		- DOM 的初次渲染

			- 通过 createElement 新建
			- 通过 parentEl.insertBefore 插入

	- 更新

		- 当响应性数据发生变化时，可能会涉及到 DOM 更新

			- 属性更新

	- 卸载

		- 该节点不在被需要了

			- 通过 parentEl.removeChild 完成

- 属性节点操作

	- 属性

		- 分类

			- HTML Attributes
                ```js
                    <input id='my-input' type='text' value='foo'/>
                ```

				- 定义在 HTML 标签上的属性

			- DOM Properties
                ```js
                    const el = document.querySelector('#my-input')
                ```

				- DOM 对象下的属性

		- 正确的设置元素属性

			- ① el.setAttribute('属性名', '属性值')
			- ②  . 属性赋值

				- el.属性名 = 属性值
				- el[属性名] = 属性值
            ```js
                // 初始状态: <textarea class="test-class”type="text"></textarea>
                // 获取 dom 实例
                const el = document.querySelector('textarea'
                // 1: 修改 class
                el.setAttribute('class'，'m-class') // 成功el['class'] m-class’ // 失败
                el.className ='m-class' // 成功

                // 2: 修改 type
                el.setAttribute('type','input') // 成功el['type'] ='input'// 失败

                // 3: 修改 value
                el.setAttribute('value'，"你好 世界') // 失败
                el['value'] = '你好 世界' // 成功

            ```

	- 事件

		- 添加

			- el.addEventListener

		- 删除

			- el.removeEventListener

		- 更新

			- vei（vue event invokers）

				- 为 addEventListener 回调函数，设置了一个 value 的属性方法，在回调函数中触发这个方法。通过更新该属性方法的形式，达到更新事件的目的。

					- 具体代码可查看：https://github.com/lgd8981289/vue-next-mini  中 packages/runtime-dom/src/modules/events.ts 中 patchEvent 方法

### 第九、十、十一章：Diff 算法

- 本质

	- 一个 对比的方法

		- “旧 DOM 组”更新为“新 DOM 组”时，如何更新才能效率更高。

- 步骤

	- ① sync from start：自前向后的对比
	- ② sync from end：自后向前的对比
	- ③ common sequence + mount：新节点多于旧节点，需要挂载
	- ④ common sequence + unmount：旧节点多于新节点，需要卸载
	- ⑤ unknown sequence：乱序

## ④ 组件化

### 第十二章：组件的实现原理

- 组件对象
```js
const myComponent = {
    name: "myComponent",
    data() {
        return { foo: 1}
    },
}

```


- 组件的 vnode

    ```js
    // 该 vnode 来描述组件， type 属性存储组件的选项对象
    const vnode = {
        type: "myComponent",
        // ...
    }

    ```
	- type 为组件对象的 vnode

- 组件的渲染

    ```js
    const myComponent = {
        name: "myComponent",
        render() {
            return { 
                type: 'div',
                children: '文本'
            }
        },
    }

    ```

	- 组件对象中会包含一个 render 函数，render 函数返回值时一个 vnode。渲染组件就是渲染该 vnode

- setup 函数

	- ① 返回一个函数

		- 直接作为 render 函数渲染

	- ② 返回一个对象

		- 直接在 render 中访问暴露出来的对象数据

- 插槽的工作原理与实现

	- 插槽的本质

		- 组件中 innerHTML 的内容，在 vnode 中以 children 属性呈现

	- 原理

		- 针对 children 进行渲染即可

### 第十三章：异步组件与函数式组件

- 异步组件

	- 定义
        ```vue
            <template>
                <CompA/>
                <component :is="asyncComp" />
            <template>
            <script>
                import { shallowRef } from 'vue
                import CompA from 'CompA.vue'
                export default  {
                    components:  { CompA },
                    setup() {
                        const asyncComp = shallowRef(nul1)
                        //异步加载 compB 组件
                        import('CompB.vue') .then (CompB => asyncComp.value = CompB)
                        return {
                            asyncComp
                        }
                    }          
                }
            </script>

        ```

		- 异步加载的组件

	- 作用

		- 页面性能、拆包、服务端下发组件

- 函数式组件

	- 没有状态的组件。本质上是一个函数，通过静态属性的形式添加 props 属性

### 第十四章：内建组件和模块

- KeepAlive

	- 作用

		- 缓存一个组件，避免不断地销毁和创建

	- 核心原理

		- ① 组件被卸载时

			- 把组件保存在一个容器中

		- ② 组件被挂载时

			- 从容器中把组件取出来

- Teleport

	- 作用

		- 将插槽的内容渲染到其他位置

	- 核心原理

		- ① 把 Teleport 组件的渲染逻辑，从渲染器中抽离
		- ② 在指定的位置进行独立渲染

- Transition

	- 作用

		- 实现动画逻辑

	- 核心原理

		- ① DOM 元素被挂载时，将动效附加到该 DOM 元素上
		- ② DOM 元素被卸载时，等在 DOM 元素动效执行完成后，执行卸载 DOM 操作

## ⑤ 编译器

### 第十五章：编译器核心技术概述

- 模板 DSL 的编译器

	- DSL

		- 一种领域下，特定语言的编译器

	- 本质

		- 一段程序，可以把 A 语言翻译成 B 语言

			- 把 tempalte 模板，编译成 render 渲染函数

	- 编译流程

		- 完整的编译流程
        ![](/img/compiler.jpeg)

		- Vue 的编译流程
        ![](/img/vue3-compiler.jpeg)

- Vue 编译流程三大步

	- ①  parse：通过 parse 函数，把模板编译成 AST 对象
	- ② transform：通过 transform 函数，把 AST 转化为 JavaScript AST
	- ③ generate：通过 generate 函数，把 JavaScript AST 转化为 渲染函数（render）

### 第十六章：解析器（parse）
- Vue 3 的解析器（parse）是一个将模板字符串转换为抽象语法树（AST）的工具。在 Vue 3 中，解析器被重写以支持新的模板语法和编译器指令。

- 解析器的主要作用是将模板字符串转换为 AST，这个 AST 可以被用来生成渲染函数或者编译器指令。在 Vue 3 中，解析器支持以下新的语法和指令：

- v-for 指令支持在 key 上使用解构语法
- v-bind 指令支持缩写语法
- v-on 指令支持缩写语法
- v-slot 指令支持新的语法和缩写语法
- v-if 和 v-for 指令支持在同一元素上使用
- 此外，解析器还支持新的模板语法，如可选链语法、nullish 合并运算符等。这些新的语法可以让开发者更加方便地编写模板，并且可以提高代码的可读性和可维护性。


### 第十七章：编译优化

- 概念

	- 通过编译的手段提取关键信息，并以此知道生成最优代码的过程

- 核心

	- 动态节点（受数据变化所影响的）
	- 静态节点（不受数据变化所影响的）

- Block 树

	- 本质

		- 虚拟节点树对象

	- 核心

		- dynamicChildren

			- 收集所有的动态子节点

- 其他优化

	- 静态提升
	- 预字符串化
	- 缓存内联事件处理函数
	- v-once 指令

## ⑥ 服务端渲染

### 第十八章：同构渲染

- CSR、SSR以及同构渲染

	- CSR：客户端渲染

		![](/img/vue-csr.jpg)

	- SSR：服务端渲染

		![](/img/vue-csr.jpg)

	- 同构渲染

		- 单独的 CSR
		- 单独的 SSR
		- CSR + SSR

			- 首次渲染
			- 非首次渲染
    - 对比
    ![](/img/vue-contrast.jpg)

- 服务端渲染，将虚拟 DOM  渲染为 HTML 字符串

	- 解析 vnode ，进行字符串拼接

- 服务端渲染，将 组件 渲染为 HTML 字符串

- 客户端激活的原理

	- ① 为页面中的 DOM 元素与虚拟节点对象之间建立联系
	- ② 为页面中的 DOM 元素添加事件绑定
    - renderer.hydrate() ①②
