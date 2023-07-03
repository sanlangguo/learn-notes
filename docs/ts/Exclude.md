#### Exclude

在 TypeScript 中，联合类型是由多个类型组成的类型。有时候我们需要从联合类型中排除某些特定的类型，这时可以使用 TS Exclude 工具来实现。

下面是一个示例：
```ts
type MyUnion = 'a' | 'b' | 'c' | 'd';
type ExcludedUnion = Exclude<MyUnion, 'b' | 'd'>; // ExcludedUnion 的类型为 'a' | 'c'
const D:ExcludedUnion = 'a'
console.log(D)

```

在上述示例中，我们定义了一个名为 MyUnion 的联合类型，它包含了 'a'、'b'、'c' 和 'd' 这四个字符串字面量类型。然后，我们使用 TS.Exclude 工具将 'b' 和 'd' 从 MyUnion 联合类型中排除出去，得到一个新的类型 ExcludedUnion。

通过使用 TS.Exclude 工具，我们成功地排除了 'b' 和 'd' 这两个特定的类型，并生成了一个新的联合类型 ExcludedUnion，其中只包含了 'a' 和 'c' 两个字符串字面量类型。

需要注意的是，TS.Exclude 工具只能应用于联合类型。如果尝试将其应用于非联合类型，TypeScript 编译器将会报错。







