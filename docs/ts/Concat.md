#### Concat

在 TypeScript 中，Concat 是一个类型工具，用于将多个数组类型合并成一个新的数组类型。它可以通过使用联合类型和元组类型来实现数组类型的合并。

```ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
```
Concat 接受两个泛型参数 T 和 U，分别表示待合并的两个数组类型。

使用 Concat，可以定义一个新的类型，该类型将两个数组类型 T 和 U 合并成一个新的数组类型。

例如，假设有两个数组类型 A 和 B：

```ts
type A = [number, string];
type B = [boolean];
```
现在，我们可以使用 Concat 将类型 A 和类型 B 合并成一个新的类型 C：

```ts
type C = Concat<A, B>;
```
在上述代码中，C 是类型 A 和类型 B 的合并类型，它是一个包含了 A 和 B 中所有元素的新的数组类型。

使用方法如下：

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type A = [number, string];
type B = [boolean];
type C = Concat<A, B>;

const arr1: A = [1, 'hello'];
const arr2: B = [true];
const arr3: C = [...arr1, ...arr2];
console.log(arr3); // [1, 'hello', true]

```
在上述代码中，我们定义了三个数组变量 arr1、arr2 和 arr3。arr1 是类型 A 的数组，arr2 是类型 B 的数组。然后，我们使用数组扩展操作符将 arr1 和 arr2 的元素合并到 arr3 中，并打印 arr3 的结果。

通过使用 Concat，我们可以方便地将多个数组类型合并成一个新的数组类型，提供更灵活的数组操作方式。