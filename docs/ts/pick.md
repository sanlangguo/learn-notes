#### Pick
在 TypeScript 中，Pick 是一个内置的工具类型，它允许你从一个给定的类型中选择指定的属性并创建一个新的类型。

Pick 的语法如下所示：

```ts
Pick<T, K>

```
其中，T 是要选择属性的源类型，K 是要选择的属性的键的联合类型。

使用 Pick 可以在编译时对类型进行约束，只选择指定的属性，而忽略其他属性。

例如，假设有一个类型 Person，包含 name、age 和 address 属性：

```ts
type Person = {
  name: string;
  age: number;
  address: string;
};

```
现在，我们使用 Pick 来选择 Person 类型中的 name 和 age 属性：

```ts
type PersonInfo = Pick<Person, 'name' | 'age'>;
```
在上述代码中，PersonInfo 类型是从 Person 类型中选择了 name 和 age 属性，而忽略了 address 属性。

在使用 Pick 后，我们可以使用 PersonInfo 类型来创建新的对象或对现有对象进行类型约束：

```ts
const person: PersonInfo = {
  name: 'John',
  age: 25,
};
```
在上述代码中，person 对象使用 PersonInfo 类型进行约束，只有 name 和 age 属性是允许的。

需要注意的是，Pick 只选择指定的属性，并不会改变属性的可选性或只读性。如果源类型中的属性是可选的，那么在 Pick 后，新类型中的属性也是可选的。

另外，Pick 可以与其他工具类型（如 Partial、Required 等）一起使用，以进一步调整类型的可选性和只读性。

#### 总结：
TS Pick 是一个内置的工具类型，在 TypeScript 中用于从一个给定的类型中选择指定的属性并创建一个新的类型。它可以在编译时对类型进行约束，忽略不需要的属性。使用 Pick，可以灵活地选择需要的属性，并在代码中增加类型安全性。