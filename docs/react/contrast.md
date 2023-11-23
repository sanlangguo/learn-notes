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

`JSX` 是一种 `JavaScript` 的语法扩展，它允许在 `JavaScript` 代码中编写类似 `HTML` 的代码。在 `React` 中，可以使用 JSX 来描述组件的结构和外观，然后使用 `Babel` 或者其他类似的工具将 JSX 转换为普通的 `JavaScript` 代码。

* JSX 自动阻止注入攻击

在 `React` `中，JSX` 自动阻止注入攻击的原理是将所有输入都视为纯文本，而不是 `HTML` 代码。这意味着，如果在 `JSX` 中使用了用户输入的数据，它们将被自动转义，以避免 XSS（跨站脚本）攻击。

例如，考虑以下代码：

```jsx
const user = {
  name: '<script>alert("XSS")</script>'
};

const element = <div>Hello, {user.name}!</div>;
```

在上面的代码中，我们定义了一个名为 user 的对象，并将其中一个属性设置为包含恶意脚本的字符串。然后，我们在 `JSX` 中使用了` user.name` 属性来显示该字符串。但是，由于 `React` 自动转义了该字符串，因此它将被显示为纯文本，而不是被执行为恶意脚本。

需要注意的是，`React` 只会自动转义字符串类型的数据。如果需要在 `JSX` 中使用其他类型的数据（例如数字、布尔值、对象等），则需要手动进行转义。可以使用 `ReactDOMServer.renderToString` 方法或者其他类似的工具来进行转义。


#### 生命周期

[官方生命周期](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

##### Class 生命周期
![生命周期](/img/react-life.png)

##### 挂载

当一个`React`组件被实例化并插入到`DOM`中时，它经历了一系列的挂载阶段，这些阶段对应着一些声明周期方法。以下是`React`挂载阶段的详细说明：

`constructor()`: 构造函数，用于创建并初始化组件的状态。在组件的生命周期中只会被调用一次。

`static getDerivedStateFromProps(props, state)`: 在组件实例化之后和每次接收新的`props`时被调用，用于根据`props`的变化来更新组件的`state`。

`render()`: 渲染方法，用于返回组件的JSX结构。

`componentDidMount()`: 在组件被渲染到`DOM`之后立即调用。常用于执行异步操作，如从服务器加载数据、启动定时器等。

这些声明周期方法在`React`组件挂载阶段的顺序如下：

```js
constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
```
在挂载阶段中，首先会调用`constructor()`构造函数来实例化组件，并初始化组件的状态。接下来，会调用`static getDerivedStateFromProps()`方法来更新组件的状态，这个方法会根据传入的`props`和当前的`state`返回一个新的`state`对象。然后，调用`render()`方法来渲染组件的`JSX`结构，并将其插入到`DOM`中。

最后，在组件被成功渲染到`DOM`之后，会调用`componentDidMount()`方法。在这个方法中，可以执行一些需要DOM存在的操作，如向服务器发送数据请求、订阅事件、启动定时器等。

需要注意的是，在挂载阶段中，`render()`方法是必须的，而且必须返回一个`React`元素或`null`。其他的声明周期方法都是可选的，可以根据需要选择性地使用它们来处理各种逻辑。


##### 更新

当`React`组件的`props`或`state`发生变化，或者调用了`forceUpdate()`方法时，组件会经历更新阶段，更新阶段涉及一系列的声明周期方法。以下是`React`更新阶段的详细说明：

`static getDerivedStateFromProps(nextProps, prevState)`: 在组件接收到新的`props或state`变化时被调用，用于根据新的`props`更新组件的`state`。

`shouldComponentUpdate(nextProps, nextState)`: 在组件接收到新的props或state变化时被调用，用于决定是否重新渲染组件。默认情况下，React会根据新的props和state自动重新渲染组件。可以在此方法中返回false来阻止不必要的重新渲染。

`render()`: 渲染方法，用于返回组件的JSX结构。

`getSnapshotBeforeUpdate(prevProps, prevState)`: 在组件更新之前被调用，用于获取更新前的`DOM`状态。此方法的返回值将作为第三个参数传递给`componentDidUpdate(prevProps, prevState, snapshot)`方法。

`componentDidUpdate(prevProps, prevState, snapshot)`: 在组件更新后被调用，可以在此方法中执行与更新后的`DOM`相关的操作。

这些声明周期方法在React组件更新阶段的顺序如下：
```js

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
```
在更新阶段中，首先会调用`static getDerivedStateFromProps()`方法来获取新的`props`，并根据新的`props`更新组件的`state`。然后，调用`shouldComponentUpdate()`方法来决定是否重新渲染组件。如果`shouldComponentUpdate()`返回`false`，则不会继续执行后续的渲染步骤，从而节省了性能。如果`shouldComponentUpdate()`返回`true`或未定义，则会继续执行`render()`方法来重新渲染组件。

接下来，调用`getSnapshotBeforeUpdate()`方法来获取更新前的`DOM`状态，可以在此方法中执行一些需要基于当前`DOM`状态的操作，比如获取滚动位置等。最后，在组件成功更新后，调用`componentDidUpdate()`方法，可以在此方法中执行与更新后的`DOM`相关的操作，如更新`DOM`、触发动画效果等。

需要注意的是，在更新阶段中，`render()`方法是必须的，而其他的声明周期方法都是可选的，可以根据需要选择性地使用它们来处理各种逻辑。另外，如果使用了`React Hooks`，可以使用`useEffect`来替代`componentDidUpdate`和`componentWillUnmount`等声明周期方法。


##### 卸载

当一个`React`组件从`DOM`中被移除时，它会经历卸载阶段，卸载阶段涉及以下声明周期方法。以下是`React`卸载阶段的详细说明：

`componentWillUnmount()`: 在组件被卸载之前调用，可以在此方法中进行一些清理工作，如取消定时器、取消订阅等。
这是卸载阶段中唯一一个声明周期方法，它在组件被即将从DOM中卸载之前被调用。

在卸载阶段中，组件的`componentWillUnmount()`方法会被调用，可以在此方法中执行一些清理操作，以确保组件被彻底卸载并释放相关资源。比如，可以在这个方法中取消订阅事件、清除定时器、取消网络请求等。

需要注意的是，卸载阶段只有一个声明周期方法，其他的声明周期方法，如`render()`、`componentDidMount()`等，在此阶段不会被调用。因此，卸载阶段主要用于执行一些清理工作，而不是处理渲染和更新相关的逻辑。

卸载阶段的触发情况包括组件从DOM中被移除，或者组件在父组件中被删除等。在这些情况下，`React`会自动调用组件的`componentWillUnmount()`方法。

总结起来，在React中的卸载阶段，可以通过实现`componentWillUnmount()`方法来执行一些清理操作，以确保组件被正确地卸载和释放资源。


#### Hooks 生命周期

##### 挂载/卸载

要在组件挂载时执行操作，可以在`useEffect`函数中传递一个空的依赖数组`[]`。这将告诉`React`在组件挂载后执行一次副作用操作。

```jsx

import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // 在组件挂载后执行的副作用操作
    // 可以进行一些初始化操作、订阅事件等

    return () => {
      // 可选的清理函数
      // 在组件卸载时执行的清理操作
    };
  }, []);

  return <div>My Component</div>;
}

```

如果在副作用操作中需要清理一些资源，也可以返回一个可选的清理函数。当组件卸载时，`React`会自动调用这个清理函数。


##### 更新
要在组件更新时执行操作，可以在`useEffect`函数中传递一个包含依赖项的数组。当依赖项发生变化时，`React`会重新执行`useEffect`函数内部的副作用操作。
```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 在组件更新后执行的副作用操作
    // 可以进行一些与更新相关的操作

    return () => {
      // 可选的清理函数
      // 在组件重新渲染前执行的清理操作
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

```

我们使用`useState`钩子来定义一个名为`count`的状态变量，并使用`setCount`函数来更新它。然后，我们使用`useEffect`钩子函数定义了需要在组件更新后执行的副作用操作，并在依赖项数组中传入`count`变量。这意味着当`count`变量发生变化时，`React`会重新执行副作用操作。



#### 事件处理
React 中的事件处理基本上是在 React 元素上定义回调函数来处理的。例如，在一个按钮元素上定义一个 `onClick` 属性并将其设置为一个函数，该函数将在用户单击按钮时执行。以下是一个示例代码：

```jsx
import React from 'react';

function handleClick() {
  console.log('Button clicked');
}

function App() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

在上面的代码中，我们定义了一个名为 `handleClick` 的函数，并将其作为 onClick 属性传递给 `<button>` 元素。当用户单击按钮时，`React` 将自动调用该函数。

除了 `onClick` `之外，React` 还支持许多其他事件，例如 `onMouseOver、onSubmit、onKeyDown` 等。可以在 React 官方文档中查看完整的事件列表。

需要注意的是，在 `React` 中，事件对象不同于原生 `DOM` 中的事件对象。React 将所有事件对象封装在合成事件对象中，以便在不同浏览器和平台上具有一致的行为。可以通过将事件对象作为参数传递给回调函数来访问合成事件对象。例如：

```jsx
import React from 'react';

function handleClick(event) {
  console.log('Button clicked');
  console.log('Event:', event);
}

function App() {
  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

在上面的代码中，我们将事件对象作为参数传递给 handleClick 函数，并在控制台中打印了它


#### 箭头函数

在 `React` 中使用箭头函数可以简化代码，并且可以避免一些常见的错误。在箭头函数中，`this` 关键字的值是在定义函数时确定的，而不是在运行时确定的。这意味着不需要使用 `bind` 或者使用 `that = this` 这样的模式来绑定 `this`

下面是一个使用箭头函数的示例：

```jsx
import React from 'react';

class App extends React.Component {
  handleClick = () => {
    console.log('Button clicked');
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}
```

在上面的代码中，我们使用箭头函数来定义 `handleClick` 方法。在类中定义的箭头函数将自动绑定到类的实例上，因此我们无需手动绑定 `this`。在 `render` 方法中，我们将 `handleClick` 方法传递给按钮元素的 `onClick` 属性。

需要注意的是，在使用箭头函数时，不能使用 `arguments` 对象来访问函数的参数。如果需要访问参数，则应该使用剩余参数语法或者使用命名参数。

```jsx
import React from 'react';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Click me</button>
);

const App = () => {
  const handleClick = (event, param1, param2) => {
    console.log('Button clicked');
    console.log('Event:', event);
    console.log('Param1:', param1);
    console.log('Param2:', param2);
  }

  return (
    <Button onClick={(event) => handleClick(event, 'foo', 'bar')} />
  );
}

```

除了在类中使用箭头函数之外，在函数式组件中使用箭头函数也非常常见。在函数式组件中，可以使用箭头函数来定义组件本身或者定义组件内部的回调函数。例如：

```jsx
import React from 'react';

const Button = ({ onClick }) => (
  <button onClick={onClick}>Click me</button>
);

const App = () => {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <Button onClick={handleClick} />
  );
}

```

在上面的代码中，我们定义了一个名为 `Button` 的函数式组件，并将 `onClick` 属性传递给按钮元素。在 `App` 组件中，我们定义了一个名为 `handleClick` 的箭头函数，并将其传递给 `Button` 组件的 `onClick` 属性。



#### this 绑定问题
在类组件中，this关键字指向当前组件的实例。这使得可以在组件内部访问和操作组件的状态、props和实例方法。在类组件中，this绑定是自动完成的，因此不需要显式地绑定this。
例如：

```jsx
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

```
在上述示例中，`this.handleClick`方法中的`this`指向的是当前组件的实例，因此可以通过`this.setState`来更新状态。

然而，在函数组件中，this不会自动绑定到组件实例上。这意味着如果在函数组件中使用类似于上述示例中的代码，`this.handleClick`将不会正确地指向组件实例。

为了解决这个问题，`React`引入了`Hooks`来处理函数组件中的状态和副作用。使用Hooks，可以通过使用`useState`和其他`Hooks`来管理组件的状态和副作用，而无需关心`this`绑定问题。

例如：
```jsx
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

```
在上述示例中，我们使用`useState`来声明和管理组件的状态。我们在函数组件中定义了`handleClick`函数，并直接使用它来更新状态，而无需关心`this`绑定问题。

总结起来，在`React`中，类组件的`this`绑定是自动完成的，而函数组件中没有`this`绑定问题。在函数组件中，可以使用Hooks来处理状态和副作用，而无需关心`this`绑定。无论是使用类组件还是函数组件，都可以轻松地编写和管理`React`应用程序。

#### 传递参数

##### react 类组件父子传值

1. 属性传递：父组件可以通过在子组件上设置属性来传递值。子组件可以通过`this.props`对象来访问父组件传递的属性值。

```jsx
class ParentComponent extends React.Component {
  render() {
    const name = 'John';
    return <ChildComponent name={name} />;
  }
}

class ChildComponent extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```
2. 上下文传递：`React`允许使用上下文（context）在组件树中传递值，使得跨组件的数据共享更加方便。父组件可以通过创建上下文对象并使用`getChildContext`方法来传递值，子组件可以通过`this.context`来访问。

```jsx
const MyContext = React.createContext();

class ParentComponent extends React.Component {
  render() {
    return (
      <MyContext.Provider value="John">
        <ChildComponent />
      </MyContext.Provider>
    );
  }
}

class ChildComponent extends React.Component {
  static contextType = MyContext;

  render() {
    return <div>{this.context}</div>;
  }
}
```

3. Refs：通过使用Refs，父组件可以直接引用子组件实例，并直接访问或操作子组件的属性和方法。

```jsx
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  handleClick = () => {
    console.log(this.childRef.current.value);
    this.childRef.current.focus();
  };

  render() {
    return (
      <div>
        <ChildComponent ref={this.childRef} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focus() {
    this.inputRef.current.focus();
  }

  render() {
    return <input ref={this.inputRef} />;
  }
}

```

4. Redux或其他状态管理库

使用状态管理库如`Redux`，可以在父组件和子组件之间共享和管理应用程序的状态。父组件可以通过将状态存储在`Redux store`中，而子组件可以通过连接`Redux store`来获取和更新状态。

```jsx
// 父组件
import { connect } from 'react-redux';
import { updateCount } from './actions';

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.updateCount}>Increment</button>
      </>
    );
  }
}

```

```jsx
// actions
const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  updateCount
};

export default connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
```

```jsx
// 子组件
import { connect } from 'react-redux';

class ChildComponent extends React.Component {
  render() {
    return <p>Count: {this.props.count}</p>;
  }
}

const mapStateToProps = (state) => ({
  count: state.count
});

export default connect(mapStateToProps)(ChildComponent);
```

####  react 类组件中, 子组件给父传值方式

1. 通过回调函数：父组件可以将一个回调函数传递给子组件，子组件可以调用该回调函数并将值作为参数传递给父组件。

```jsx
class ParentComponent extends React.Component {
  handleValue = (value) => {
    console.log(`Received value from child: ${value}`);
  };

  render() {
    return <ChildComponent onValueChange={this.handleValue} />;
  }
}

class ChildComponent extends React.Component {
  handleChange = () => {
    this.props.onValueChange('Hello');
  };

  render() {
    return <button onClick={this.handleChange}>Click me</button>;
  }
}
```

2. 使用`props`传递方法：父组件可以将一个方法作为属性传递给子组件，子组件可以在适当的时候调用该方法并将值作为参数传递给父组件。

```jsx
class ParentComponent extends React.Component {
  handleValue = (value) => {
    console.log(`Received value from child: ${value}`);
  };

  render() {
    return <ChildComponent onValueChange={this.handleValue} />;
  }
}

class ChildComponent extends React.Component {
  handleChange = () => {
    this.props.onValueChange('Hello');
  };

  render() {
    return <button onClick={this.handleChange}>Click me</button>;
  }
}
```
3. 使用`Context`上下文：父组件可以创建一个上下文对象，并将其传递给子组件。子组件可以通过该上下文对象来传递值给父组件。

```jsx
const MyContext = React.createContext();

class ParentComponent extends React.Component {
  handleValue = (value) => {
    console.log(`Received value from child: ${value}`);
  };

  render() {
    return (
      <MyContext.Provider value={this.handleValue}>
        <ChildComponent />
      </MyContext.Provider>
    );
  }
}

class ChildComponent extends React.Component {
  static contextType = MyContext;

  handleClick = () => {
    this.context('Hello');
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
```
4. 使用`Redux`或其他状态管理库：使用状态管理库如`Redux`，可以在子组件中通过`dispatch`一个`action`来将值传递给父组件。

```jsx
// 父组件
import { connect } from 'react-redux';

class ParentComponent extends React.Component {
  handleValue = (value) => {
    console.log(`Received value from child: ${value}`);
  };

  render() {
    return <ChildComponent onValueChange={this.handleValue} />;
  }
}

const mapDispatchToProps = {
  onValueChange: (value) => ({ type: 'VALUE_CHANGE', payload: value })
};

export default connect(null, mapDispatchToProps)(ParentComponent);

// 子组件
import { connect } from 'react-redux';

class ChildComponent extends React.Component {
  handleClick = () => {
    this.props.onValueChange('Hello');
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

const mapDispatchToProps = {
  onValueChange: (value) => ({ type: 'VALUE_CHANGE', payload: value })
};

export default connect(null, mapDispatchToProps)(ChildComponent);
```



#### Hooks

* 为什么只能在函数最外层调用 `Hook`？为什么不要在循环、条件判断或者子函数中调用？`memoizedState` 数组是按 `hook`定义的顺序来放置数据的，如果调用的顺序变化，链表（memoizedState） 并不会感知到
* 自定义的` Hook` 是如何影响使用它的函数组件的？共享同一个链表（`memoizedState`），共享同一个顺序
* React 中是通过类似单链表的形式来代替数组的。通过 `next` 按顺序串联所有的 `hook`。`react` 会生成一棵组件树，树中每个节点对应了一个组件，`hooks` 的数据就作为组件的一个信息，存储在这些节点上，伴随组件一起出生，一起死亡
 #### Hooks 能替代高阶组件和 Render Props 吗？

1. 没有` Hooks` 之前，高阶组件和 `Render Props` 本质上都是将复用逻辑提升到父组件中。而 `Hooks` 出现之后，我们将复用逻辑提取到组件顶层，而不是强行提升到父组件中。这样就能够避免 `HOC` 和 `Render Props` 带来的「嵌套地域」。但是，像` Context` 的 `<Provider/> `和 `<Consumer/>` 这样有父子层级关系（树状结构关系）的，还是只能使用` Render Props` 或者 `HOC`。
2. 对于 `Hooks、Render Props` 和高阶组件来说，它们都有各自的使用场景`Hooks替代 Class` 的大部分用例，除了 `getSnapshotBeforeUpdate 和 componentDidCatch` ，`getDerivedStateFromError`还不支持。提取复用逻辑。除了有明确父子关系的，其他场景都可以使用 Hooks
3. Render Props在组件渲染上拥有更高的自由度，可以根据父组件提供的数据进行动态渲染。适合有明确父子关系的场景
4. 高阶组件：适合用来做注入，并且生成一个新的可复用组件。适合用来写插件。不过，能使用 `Hooks` 的场景还是应该优先使用 `Hooks`，其次才是 `Render Props 和 HOC`。当然，`Hooks、Render Props` 和` HOC` 不是对立的关系。我们既可以用` Hook 来写 Render Props 和 HOC`，也可以在 HOC 中使用 Render Props 和 Hooks。

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

```jsx
const [state, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
forceUpdate()
```

#### [useImperativeHandle](http://jianshu.com/p/92def9e95af5)

1. 主要作用:用于减少父组件中通过forward+useRef获取子组件DOM元素暴露的属性过多
2. 为什么使用: 因为使用forward+useRef获取子函数式组件DOM时,获取到的dom属性暴露的太多了
3. 解决: 使用uesImperativeHandle解决,在子函数式组件中定义父组件需要进行DOM操作,减少获取DOM暴露的属性过多

### 六、 [源码分析](https://xiaochen1024.com/courseware/60b1b2f6cf10a4003b634718/60b1b311cf10a4003b634719)

---

### 七、 [redux toolkit](https://cn.redux.js.org/introduction/why-rtk-is-redux-today)


---

### 八、核心原理

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

#### react hooks 原理

Hooks的原理可以分为以下几个关键点：

1. 闭包与调用顺序：Hooks通过使用闭包来保存组件的状态和其他数据。每个Hooks函数都会创建一个闭包，以保存该Hooks函数的数据。而且，由于Hooks函数的调用顺序是固定的，React可以根据调用顺序来确定每个Hooks函数对应的数据。
2. Hooks的规则：为了确保Hooks的正确使用，React有一些规则需要遵守。例如，Hooks只能在顶层调用，不能在循环、条件语句或嵌套函数中调用。这是因为React需要依靠调用顺序来确定Hooks函数对应的数据。
3. useState原理：useState是最常用的Hooks之一，用于在函数组件中创建和管理状态。它的原理是通过闭包来保存状态值，并返回一个包含状态值和更新状态值的数组。当组件重新渲染时，React会根据调用顺序来获取正确的状态值。
4. useEffect原理：useEffect用于在函数组件中处理副作用操作，如订阅、取消订阅、数据获取等。它的原理是通过闭包来保存effect函数，并在每次渲染结束后执行effect函数。同时，React还会比较前一次渲染时的effect函数和当前渲染时的effect函数，以确定是否需要重新执行effect。
5. useMemo和useCallback原理：useMemo和useCallback用于优化性能，避免不必要的计算和函数创建。它们的原理是通过缓存计算结果和函数实例，以便在后续渲染中共享和复用。

总结起来，React最新版本的Hooks原理主要涉及闭包的使用、调用顺序的确定以及规则的遵守。Hooks通过使用闭包来保存组件的状态和其他数据，并根据调用顺序来确定每个Hooks函数对应的数据。同时，React还提供了一些常用的Hooks函数，如useState、useEffect、useMemo和useCallback，用于方便地管理状态和处理副作用操作。通过使用Hooks，开发者可以更方便地编写逻辑清晰、可读性强的函数组件。

React Hooks 是 React 16.8 版本引入的一种新的特性，它允许我们在函数组件中使用状态（state）和其他 React 特性，而无需编写类组件。

React Hooks 的内部工作原理主要涉及两个方面：函数组件的渲染和状态的管理。

- 在函数组件的渲染过程中，React Hooks 会通过 Fiber 架构来进行调度和管理。每当函数组件被调用时，React 会创建一个称为 Fiber 的数据结构来表示该组件的状态和相关信息。Fiber 架构允许 React 在渲染过程中进行中断、恢复和优先级调度，以提高性能和用户体验。

- React Hooks 的另一个关键方面是状态的管理。通过使用 useState、useEffect 和其他自定义的 Hook，我们可以在函数组件中声明和使用状态，以及处理副作用操作。useState Hook 提供了一种在函数组件中添加局部状态的方式，而 useEffect Hook 则允许我们在组件渲染后执行副作用操作（如数据获取、订阅事件等）。

- 当我们在函数组件中调用 useState 或其他 Hook 时，React 会根据调用的顺序来追踪和管理状态。每个 Hook 都与特定的 Fiber 相关联，以便在组件重新渲染时正确地保留和更新状态。React 还会根据依赖项数组来决定何时重新执行副作用操作。

总结来说，React Hooks 的内部工作原理涉及到 Fiber 架构的调度和管理，以及 Hook 的状态追踪和更新机制。这些机制使得函数组件能够像类组件一样拥有状态和副作用的能力，同时提供了更简洁、可复用和易于测试的代码编写方式。

#### 为什么 reack hook 使用的是链表

React Hook 使用链表的数据结构来管理组件的状态和生命周期。这是为了保持状态之间的顺序和关联，并且能够高效地进行状态更新和触发相应的生命周期方法。

链表是一种数据结构，其中每个节点都包含一个值和指向下一个节点的指针。在 React Hook 中，每个组件的状态和生命周期方法被表示为一个链表节点。

使用链表的好处包括：

1. 顺序和关联：链表可以保持状态之间的顺序和关联关系。这对于在组件之间共享状态和确保正确的状态更新非常重要。

2. 高效的状态更新：链表的结构使得在插入、删除或更新状态时具有高效性能。React 可以根据需要快速定位和更新特定的状态节点，而不需要遍历整个状态树。

3. 灵活性和可扩展性：链表结构允许在任何位置插入新的状态节点，以及在需要时轻松删除或更新节点。这使得 React Hook 具有灵活性和可扩展性，能够适应各种组件的需求。



