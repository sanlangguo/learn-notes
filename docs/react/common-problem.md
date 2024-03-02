### 为什么不能直接在 JSX 中使用 if else 实现条件染，而只能借用函数逻现呢?

实际上，我们都知道`JSX` 会被编译为 `React.createElement`。直白地说，`React.createElement` 底层逻辑是无法运行`JavaScript`代码的，只能染一个结果。因此，`JSX` 中除了 `JavaScript` 表达式不能直接写 `JavaScript` 语法。准确来讲，`JSX` 只是函数调用和表达式的语法糖


### 原生事件和 React合成事件

`React` 中的事件机制并不是原生的那一套，事件没有绑定在原生 `DOM` 上,大多数事件都绑定在 `document` 上(除了少数不会冒泡到 `document` 的事件，如 `video` 等)

同时，`React` 触发的事件也是对原生事件的包装，并不是原生 `event` 对象。
出于对性能方面的考虑，合成事件( syntheticEvent)是被池化的。这意味着合成事件对象将会被重用，因此在调用事件回调函数后，合成事件对象上的所有属性都将会被废弃。这样做可以大大节省内存，而不会频繁地创建和销毁事件对象。

这样的事件系统设计，无疑会使性能有所提升，但同时也会引发几个潜在现象现象

#### 异步访问事件对象

我们不能以异步的方式访问合成事件对象。以下代码所展示的是一个典型的错误示例,
``` js
function handleclick (e) {
    console.log(e)

    setTimeout(() => {
        console.log(e)
    }, 0)
}

```
在以上代码中，第二个 `console.log` 总会输出 `undefined`
为此，`React` 也贴心地为我们准备了持久化合成事件的方法，如下。

```js

function handleclick (e) {
    console.log(e)

    e.persist()
    setTimeout(() => {
        console.log(e)
    }, 0)
}
```

#### 阻止原生事件冒泡

React 的合成事件为使用原生事件留了一个口子，通过合成事件上的 `nativeEvent` 层。以访问原生事件。原生事件上的 `stopImmcdiatePropagation` 方法除了能做到像 `stopPropagation`一样事件向父级冒泡，还能阻止当前元素剩余的、同类型事件的执行(第一个 `click` 事件触发时，`e.stopImmcdiatePropagation` 能够阻止当前元素的第二个 `click` 事件触发 )

```js
componentDidMount () (
    document.addEventlistener('click', () => {
        console.log('document click')
    })
}

handleClick = e => {
    console.log('div click')
    e.nativeEvent.stopImmediatePropagation()
}

render() {
    return (
        <div onClick=(this.handleClick}>click</div>
    )
}
```

### react diff

我们都知道，React 把对比两个树的时间复杂度从 O(n)降低到 O()。但是，其中的优化细节和具方案可能并不为人所知，那么下面就对其中的细节和方案，以及 React 兄弟列表的 diff细节介绍一下

#### React 的三个假设

React 通过大胆的假设，制定对应的 diff 策略，将 O(n3) 复杂度的问题转换成 O(n) 复杂度的问题

- 通过分层对比策略，对 tree diff 进行算法优化
- 通过相同类生成相似树形结构，不同类生成不同树形结构以及shouldComponentUpdate策略，对 component diff 进行算法优化
- 通过设置唯一 key 策略，对 element diff 进行算法优化

但是React 的三个假设在对比 element 时存在短板，所以需要开发者为每一个 element 提供 key，以便React 可以准确地发现新旧集合节点中的相同节点，对于相同节点无须进行节点删除和创建，只需要将旧集合中节点的位置进行移动，更新为新集合中节点的位置

### 加上 key 就一定性能最优吗？

不是的，在频发移动元素的操作开销时，不一定是最优的