#### type 和 interface 区别

在 TypeScript 中，type 和 interface 都可以用来定义自定义的类型，但它们有一些不同之处，并在不同的使用场景中有不同的适用性。

1. 语法：
- type 使用关键字 type，后面跟着自定义的类型名称。
- interface 使用关键字 interface，后面跟着自定义的类型名称。
2. 定义方式：
type 可以直接定义一个类型，可以是基本类型、联合类型、交叉类型、函数类型等。例如：

```ts
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Greeting = (name: string) => string;

```
- interface 用于定义一个对象类型，可以包含属性和方法的声明。例如：
```ts
interface Person {
  name: string;
  age: number;
}

interface Greeting {
  (name: string): string;
}
```
3. 合并声明：
type 可以使用交叉类型（&）来合并多个类型声明。例如：

```ts
type A = { name: string };
type B = { age: number };
```

- type AB = A & B;
interface 可以使用 extends 关键字来合并多个接口声明。例如：

```ts
interface A {
  name: string;
}

interface B {
  age: number;
}

interface AB extends A, B {}
```

- 可选属性：
type 可以使用 ? 来定义可选属性。例如：
```ts
type Person = {
  name: string;
  age?: number;
};
```

- interface 可以使用 ? 来定义可选属性。例如：
```ts
interface Person {
  name: string;
  age?: number;
}
```

- 只读属性：
type 可以使用 readonly 关键字来定义只读属性。例如：

```ts
type Person = {
  readonly name: string;
};
}
```

- interface 可以使用 readonly 关键字来定义只读属性。例如：

```ts
interface Person {
  readonly name: string;
}
```

- 实现继承：
type 不能直接实现继承，它主要用于定义类型别名和联合类型。
interface 可以使用 extends 关键字来实现继承其他接口。例如：
```ts
interface A {
  name: string;
}

interface B extends A {
  age: number;
}

```


#### 总结：

- type 主要用于定义类型别名和联合类型，可以直接定义各种类型。它适用于需要创建复杂类型的情况。
- interface 主要用于定义对象类型，可以包含属性和方法的声明。它适用于定义对象的结构和实现继承。通常在开发中更常用 interface 来定义对象类型。
- 在实际开发中，type 和 interface 可以根据具体需求进行选择，它们并不是互斥的。有时候可以混合使用它们来定义复杂的类型。