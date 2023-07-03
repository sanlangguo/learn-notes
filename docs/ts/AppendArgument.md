#### AppendArgument

在 TypeScript 中，AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。

AppendArgument 的语法如下所示：

```ts
type AppendArgument<F extends (...args: any[]) => any, A> = (...args: Parameters<F>) => ReturnType<F>;
```
其中，F 表示函数类型，A 表示要追加的参数类型。

使用 AppendArgument 可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。

例如，假设有一个函数类型 Add，用于将两个数字相加：

```ts
type Add = (a: number, b: number) => number;
```
现在，我们想在 Add 的参数列表中追加一个额外的参数 c，类型为 string。可以使用 AppendArgument 来实现：

```ts
type AddWithC = AppendArgument<Add, string>;
```
在上述代码中，我们使用 AppendArgument 将参数类型 string 追加到 Add 函数类型中，得到了新的函数类型 AddWithC。

现在，我们可以使用 AddWithC 来声明变量或进行类型约束：

```ts
const addWithC: AddWithC = (a, b, c) => {
  console.log(c);
  return a + b;
};
```
在上述代码中，addWithC 是一个满足 AddWithC 类型约束的函数，它接受三个参数 a、b 和 c，并在函数体中打印出参数 c 的值，并返回 a + b 的结果。

需要注意的是，AppendArgument 只能在函数类型中追加参数，而不能用于接口或类的成员。

#### 总结：
TS AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。通过使用 AppendArgument，可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。这样可以提高代码的可读性和可维护性，以及类型安全性。