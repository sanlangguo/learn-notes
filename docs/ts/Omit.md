#### Omit

TS Omit 是 TypeScript 中的一个类型工具，用于创建一个新类型，从原始类型中排除指定的属性。

在 TypeScript 中，我们可能需要从一个类型中删除（排除）某些属性，以创建一个新的类型。这时可以使用 TS Omit 工具来实现。

下面是一个示例：


```ts
interface Person {
  name: string;
  age: number;
  address: string;
}

// NewPerson 的类型为 { name: string; }
type NewPerson = Omit<Person, 'age' | 'address'>;

const a:NewPerson = {
  name: 'john'
}

console.log(a)

```

在上述示例中，我们定义了一个名为 Person 的接口类型，它包含了 name、age 和 address 三个属性。然后，我们使用 TS.Omit 工具从 Person 类型中排除了 'age' 和 'address' 这两个属性，得到一个新的类型 NewPerson。

通过使用 TS.Omit 工具，我们成功地从 Person 类型中排除了 'age' 和 'address' 这两个属性，并创建了一个新的类型 NewPerson，其中只剩下了 { name: string; } 这个属性。

需要注意的是，TS.Omit 工具可以应用于接口类型和字面量类型。如果尝试将其应用于非对象类型，TypeScript 编译器将会报错。此外，当指定要排除的属性不存在于原始类型中时，TS.Omit 也不会引发错误，而是仅仅保留原始类型的所有属性。







