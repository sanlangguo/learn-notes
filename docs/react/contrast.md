### 一、React 特点

* 组件化
* 高效
* 虚拟 DOM
* 灵活
* 渐进式，本身只处理 UI ，可以和其它技术栈组合到一起来使用
* JSX
* 一种预编译 JavaScript 语言，允许让你的 JavaScript 和 HTML 混搭
* 模板中就是 JavaScript 逻辑
  单向数据流
* 组件传值
* 所有数据都是单向的，组件传递的数据都是单向

---



### 二、React 的发展历史

* Facebook 内部用来开发 Instagram
* 2013 年开源了 React
* 随后发布了 React Native
* 截止到目前：v18.2.0

---



### 三、[React 与 Vue 的对比](https://www.51cto.com/article/599732.html)

#### 状态更新

React 推崇函数式，它直接进行局部重新刷新(或者重新渲染)，这样更粗暴，但是更简单， React 并不知道什么时候“应该去刷新”，触发局部重新变化是由开发者手动调用 setState 完成

Vue 进行数据拦截/代理，它对侦测数据的变化更敏感、更精确，也间接对一些后续实现(比如 hooks，function based API)提供了很大的便利题

#### 性能

React setState 引起局部重新刷新。为了达到更好的性能，React 暴漏给开发者 shouldComponentUpdate 这个生命周期 hook，来避免不需要的重新渲染(相比之下，Vue 由于采用依赖追踪，默认就是优化状态：你动了多少数据，就触发多少更新，不多也不少，而 React 对数据变化毫无感知，它就提供 React.createElement 调用已生成 virtual dom。

另外 React 为了弥补不必要的更新，会对 setState 的行为进行合并操作。因此 setState 有时候会是异步更新，但并不是总是“异步”:

  hooks 的实现，设计上的差别，直接影响了 hooks 的实现和表现

  React hook 底层是基于链表(Array)实现，每次组件被 render 的时候都会顺序执行所有的 hooks，因为底层是链表，每一个 hook 的 next 是指向下一个 hook 的，所以要求开发者不能在不同 hooks 调用中使用判断条件，因为 if 会导致顺序不正确，从而导致报错。

  相反，Vue hook 只会被注册调用一次，Vue之所以能避开这些麻烦的问题，根本原因在于它对数据的响应是基于响应式的，是对数据进行了代理的。不需要链表进行 hooks 记录，它对数据直接代理观察。

但是 Vue 这种响应式的方案，也有自己的困扰。比如 useState() (实际上 evan 命名为 value())返回的是一个 value wrapper (包装对象)。一个包装对象只有一个属性：.value ，该属性指向内部被包装的值。我们知道在 JavaScript 中，原始值类型如 string 和 number 是只有值，没有引用的。不管是使用 Object.defineProperty 还是 Proxy，我们无法追踪原始变量后续的变化。因此 Vue 不得不返回一个包装对象，不然对于基本类型，它无法做到数据的代理和拦截。这算是因为设计理念带来的一个非常非常微小的 side effect。

#### 事件系统

* React
  它暴漏给开发者的事件不是原生事件，是 React 包装过合成事件，并且非常重要的一点是，合成事件是池化的。也就是说不同的事件，可能会共享一个合成事件对象。另外一个细节是，React 对所有事件都进行了代理，将所有事件都绑定 document 上。
  
  React 中事件处理函数中的 this 默认不指向组件实例
* vue
  Vue 事件处理函数中的 this 默认指向组件实例

#### 预编译优化问题

* vue

1. Vue3.0 提出的动静结合的 DOM diff 思想，我个人认为是 Vue 近几年在“创新”上的一个很好体现。之所以能够做到动静结合的 DOM diff，或者把这个问题放的更大：之所以能够做到预编译优化，是因为 Vue core 可以静态分析 template，在解析模版时，整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的
2. Vue 需要做数据双向绑定，需要进行数据拦截或代理，那它就需要在预编译阶段静态分析模版，分析出视图依赖了哪些数据，进行响应式处理。而 React 就是局部重新渲染，React 拿到的或者说掌管的，所负责的就是一堆递归 React.createElement 的执行调用，它无法从模版层面进行静态分析。



* React

1. React JSX 过度的灵活性导致运行时可以用于优化的信息不足
2. 在 React 框架之外，我们作为开发者还是可以通过工程化手段达到类似的目的，因为我们能够接触到 JSX 编译成 React.createElement 的整个过程。开发者在项目中开发 babel 插件，实现 JSX 编译成 React.createElement，那么优化手段就是是从编写 babel 插件开始.Prepack 同样是 FaceBook 团队的作品。它让你编写普通的 JavaScript 代码，它在构建阶段就试图了解代码将做什么，然后生成等价的代码，减少了运行时的计算量，就相当于 JavaScript 的部分求值器。 目前已停止维护
3. 另外一个 React 的方向就是 fiber 时间分片了，这倒算是 React 多管齐下的一个做法，React 是伤害已经造成，无法自身在预编译阶段做到更多，时间分片这样的优化只是在弥补伤害

---



### 四、 [开发团队与社区](https://zh-hans.reactjs.org/community/team.html)

---

### 五、 React 核心概念

#### JSX

* JSX 原理
* JSX 自动阻止注入攻击

#### 生命周期

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

#### 事件处理

#### 箭头函数

#### this 绑定问题

#### 传递参数

#### 组件

* 状态 State
* 组件生命周期
  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
* PropTypes 类型校验
* 获取真实 DOM 节点
* 和服务端交互
* readux
* 组件之间的状态共享

#### hooks

* 为什么只能在函数最外层调用 Hook？为什么不要在循环、条件判断或者子函数中调用？memoizedState 数组是按 hook定义的顺序来放置数据的，如果调用的顺序变化，链表（memoizedState） 并不会感知到
* 自定义的 Hook 是如何影响使用它的函数组件的？共享同一个链表（memoizedState），共享同一个顺序
* React 中是通过类似单链表的形式来代替数组的。通过 next 按顺序串联所有的 hook。react 会生成一棵组件树，树中每个节点对应了一个组件，hooks 的数据就作为组件的一个信息，存储在这些节点上，伴随组件一起出生，一起死亡
 #### Hooks 能替代高阶组件和 Render Props 吗？

1. 没有 Hooks 之前，高阶组件和 Render Props 本质上都是将复用逻辑提升到父组件中。而 Hooks 出现之后，我们将复用逻辑提取到组件顶层，而不是强行提升到父组件中。这样就能够避免 HOC 和 Render Props 带来的「嵌套地域」。但是，像 Context 的 <Provider/> 和 <Consumer/> 这样有父子层级关系（树状结构关系）的，还是只能使用 Render Props 或者 HOC。
2. 对于 Hooks、Render Props 和高阶组件来说，它们都有各自的使用场景Hooks替代 Class 的大部分用例，除了 getSnapshotBeforeUpdate 和 componentDidCatch ，getDerivedStateFromError还不支持。提取复用逻辑。除了有明确父子关系的，其他场景都可以使用 Hooks
3. Render Props在组件渲染上拥有更高的自由度，可以根据父组件提供的数据进行动态渲染。适合有明确父子关系的场景
4. 高阶组件：适合用来做注入，并且生成一个新的可复用组件。适合用来写插件。不过，能使用 Hooks 的场景还是应该优先使用 Hooks，其次才是 Render Props 和 HOC。当然，Hooks、Render Props 和 HOC 不是对立的关系。我们既可以用 Hook 来写 Render Props 和 HOC，也可以在 HOC 中使用 Render Props 和 Hooks。

#### 使用 Hooks 时还有哪些好的实践？

1. 将完全不相关的 state 拆分为多组 state。
2. 如果某些 state 是相互关联的，或者需要一起发生改变，就可以把它们合并为一组 state。
3. 依赖数组依赖的值最好不要超过 3 个，否则会导致代码会难以维护。
4. 如果发现依赖数组依赖的值过多，我们应该采取一些方法来减少它。
5. 去掉不必要的依赖。
6. 将 Hook 拆分为更小的单元，每个 Hook 依赖于各自的依赖数组。
7. 通过合并相关的 state，将多个依赖值聚合为一个。
8. 通过 setState 回调函数获取最新的 state，以减少外部依赖。
9. 通过 ref 来读取可变变量的值，不过需要注意控制修改它的途径。
10. 为了确保不滥用 useMemo，我们定义了下面几条规则：
    1. 如果返回的值是原始值：string, boolean, null, undefined, number, symbol（不包括动态声明的 Symbol），则不需要使用 useMemo。
    2. 对于组件内部用到的 object、array、函数等，如果没有用到其他 Hook 的依赖数组中，或者造成子组件 re-render，可以不使用 useMemo。
    3. 自定义 Hook 中暴露出来的 object、array、函数等，都应该使用 useMemo 。以确保当值相同时，引用不发生变化。

* Hooks、Render Props 和高阶组件都有各自的使用场景，具体使用哪一种要看实际情况。

1. 若 Hook 类型相同，且依赖数组一致时，应该合并成一个 Hook。
2. 自定义 Hooks 的返回值可以使用 Tuple 类型，更易于在外部重命名。如果返回的值过多，则不建议使用。
3. ref 不要直接暴露给外部使用，而是提供一个修改值的方法。
4. 在使用 useMemo 或者 useCallback 时，可以借助 ref 或者 setState callback，确保返回的函数只创建一次。也就是说，函数不会根据依赖数组的变化而二次创建。

#### [userMemo userCallback 区别](https://www.jianshu.com/p/b8d27018ed22)

useCallBack

1. 返回值：一个缓存的回调函数
2. 参数：需要缓存的函数，依赖项
3. 使用场景：父组件更新时，通过props传递给子组件的函数也会重新创建，然后这个时候使用 useCallBack 就可以缓存函数不使它重新创建

useMemo

1. 返回值：一个缓存的值
2. 参数：需要缓存的值(也可以是个计算然后再返回值的函数) ，依赖项
3. 使用场景：组件更新时，一些计算量很大的值也有可能被重新计算，这个时候就可以使用 useMemo 直接使用上一次缓存的值

* useEffect和useLayoutEffect的区别

执行顺序

1. useEffect，异步执行，在渲染之后执行
2. useLayoutEffect，在渲染之前执行完之后，再去渲染到屏幕

获取之前的值

1. useEffect 可以获取之前的值

* 如何强制更新组件

`````
const [state, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
forceUpdate()
`````

#### [useImperativeHandle](http://jianshu.com/p/92def9e95af5)

1. 主要作用:用于减少父组件中通过forward+useRef获取子组件DOM元素暴露的属性过多
2. 为什么使用: 因为使用forward+useRef获取子函数式组件DOM时,获取到的dom属性暴露的太多了
3. 解决: 使用uesImperativeHandle解决,在子函数式组件中定义父组件需要进行DOM操作,减少获取DOM暴露的属性过多

### 六、 [router](https://www.zhihu.com/question/38725566/answer/2530188754)

---

### 七、 [源码分析](https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718/60b1b311cf10a4003b634719)

---

### 八、 [redux toolkit](https://cn.redux.js.org/introduction/why-rtk-is-redux-today)

### 九、基础模块-componet

---

### 十、核心原理

---

#### 事件原理

React是一个用于构建用户界面的JavaScript库。在React中，事件是通过合成事件（SyntheticEvent）系统来处理的。合成事件是React封装的一种跨浏览器兼容的事件系统，它抽象了底层的浏览器原生事件，使事件处理逻辑更加统一和可靠。

在React的早期版本（v16以下），合成事件是通过事件委托（event delegation）的方式处理的。具体来说，React会在组件的根节点上注册一个事件监听器，然后根据事件冒泡的机制，将事件委托给适当的组件进行处理。这样做的好处是节省了内存，并且可以自动处理动态创建和销毁的组件。然而，事件委托的缺点是无法同时监听捕获和冒泡阶段的事件。

在React的新版本（v16及以上），合成事件的实现发生了一些变化。React不再使用事件委托，而是直接将事件绑定到每个组件实例上。这样做的好处是可以更好地支持并发模式（Concurrent Mode）和React Fiber架构。此外，新版本中的合成事件还引入了React事件池（Event Pool）机制，可以重用合成事件对象，提高性能。

总结起来，React的不同版本在事件原理上主要有以下变化：

早期版本中，React使用事件委托的方式处理合成事件，将事件委托给根节点进行处理。
新版本中，React将合成事件直接绑定到每个组件实例上，不再使用事件委托。同时，引入了事件池机制来重用合成事件对象。
这些变化旨在提高性能和增强对并发模式的支持。无论是哪个版本的React，合成事件系统都是React提供的抽象层，使事件处理更加统一和跨浏览器兼容。

#### 调和原理

在 React 的术语中，「当状态发生改变，重新计算组件的虚拟 DOM，并计算 diff 找到最优的 DOM 更新方案」这个过程，被称为调和阶段（Reconciliation)，而将更新方案应用到真实的 DOM 树上的过程被称为提交阶段（Commit）。

#### 调度原理

React最新版本（v18）引入了一种新的调度原理，称为"Concurrent Mode"（并发模式）。Concurrent Mode旨在提供更好的用户体验和更高的性能，使React能够更好地处理大型应用和复杂的交互。

在传统的React中，更新组件时是同步的，即一旦开始更新，就会一直执行直到更新完成。这样的更新方式在处理大量计算密集型任务时可能会阻塞主线程，导致页面卡顿和用户体验下降。为了解决这个问题，React引入了Concurrent Mode。

Concurrent Mode的核心思想是将组件的更新过程拆分成多个优先级较低的小任务，这些任务可以在主线程执行的空闲时间内逐步完成。这种方式可以使React更好地响应用户交互和渲染优化，并且可以提高应用的整体性能。

具体来说，Concurrent Mode的调度原理包括以下几个关键概念：

1. 调度器（Scheduler）：负责控制和协调任务的执行顺序。调度器根据任务的优先级和调度策略来决定任务的执行顺序。React的调度器使用了时间切片（Time Slicing）的技术，将任务拆分成小的时间片段，并根据优先级动态调整任务的执行顺序。
2. 任务优先级：每个任务都有一个优先级，用于决定任务的执行顺序。React定义了多个优先级，从高到低分别是紧急优先级（Immediate Priority）、用户交互优先级（User Blocking Priority）、正常优先级（Normal Priority）和低优先级（Low Priority）。调度器根据优先级来决定任务的执行顺序，优先处理高优先级的任务。
3. 调度策略：React的调度器根据任务的优先级和调度策略来决定任务的执行方式。调度策略包括两种模式，分别是批量模式（Batching Mode）和连续模式（Continuous Mode）。批量模式下，React会将多个任务合并成一个批量更新，减少不必要的中间步骤，提高性能。连续模式下，React会保持及时响应用户交互，尽快完成任务。
4. 调度优先级改变：在Concurrent Mode中，任务的优先级是可以动态改变的。React允许在运行时动态调整任务的优先级，以便更好地响应用户交互和优化性能。

总而言之，React最新版本的调度原理通过将组件的更新过程拆分成多个小任务，并根据任务的优先级和调度策略来决定任务的执行顺序，实现了更好的用户体验和更高的性能。Concurrent Mode的引入使得React能够更好地应对大型应用和复杂的交互场景，提供更好的用户体验。

#### hooks 原理

React最新版本（v18）的Hooks是一种用于在函数组件中使用状态和其他React特性的方式。它的设计目的是为了简化组件逻辑，使得组件更易于理解、复用和测试。

Hooks的原理可以分为以下几个关键点：

1. 闭包与调用顺序：Hooks通过使用闭包来保存组件的状态和其他数据。每个Hooks函数都会创建一个闭包，以保存该Hooks函数的数据。而且，由于Hooks函数的调用顺序是固定的，React可以根据调用顺序来确定每个Hooks函数对应的数据。
2. Hooks的规则：为了确保Hooks的正确使用，React有一些规则需要遵守。例如，Hooks只能在顶层调用，不能在循环、条件语句或嵌套函数中调用。这是因为React需要依靠调用顺序来确定Hooks函数对应的数据。
3. useState原理：useState是最常用的Hooks之一，用于在函数组件中创建和管理状态。它的原理是通过闭包来保存状态值，并返回一个包含状态值和更新状态值的数组。当组件重新渲染时，React会根据调用顺序来获取正确的状态值。
4. useEffect原理：useEffect用于在函数组件中处理副作用操作，如订阅、取消订阅、数据获取等。它的原理是通过闭包来保存effect函数，并在每次渲染结束后执行effect函数。同时，React还会比较前一次渲染时的effect函数和当前渲染时的effect函数，以确定是否需要重新执行effect。
5. useMemo和useCallback原理：useMemo和useCallback用于优化性能，避免不必要的计算和函数创建。它们的原理是通过缓存计算结果和函数实例，以便在后续渲染中共享和复用。

总结起来，React最新版本的Hooks原理主要涉及闭包的使用、调用顺序的确定以及规则的遵守。Hooks通过使用闭包来保存组件的状态和其他数据，并根据调用顺序来确定每个Hooks函数对应的数据。同时，React还提供了一些常用的Hooks函数，如useState、useEffect、useMemo和useCallback，用于方便地管理状态和处理副作用操作。通过使用Hooks，开发者可以更方便地编写逻辑清晰、可读性强的函数组件。

### 十一、 设计模式

---

#### 十二、组合模式

---

#### 十三、render props 模式

---

#### 十四、hoc | 装饰着模式

---

#### 十五、提供者模式

---

#### 十六、自定义 hooks 模式

