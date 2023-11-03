### AppendArgument
在 TypeScript 中，AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。

AppendArgument 的语法如下所示：
~~~ ts
type AppendArgument<F extends (...args: any[]) => any, A> = (...args: Parameters<F>) => ReturnType<F>;
~~~

其中，F 表示函数类型，A 表示要追加的参数类型。

使用 AppendArgument 可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。

例如，假设有一个函数类型 Add，用于将两个数字相加：
~~~ ts
type Add = (a: number, b: number) => number;
~~~

现在，我们想在 Add 的参数列表中追加一个额外的参数 c，类型为 string。可以使用 AppendArgument 来实现：
~~~ ts
type AddWithC = AppendArgument<Add, string>;
~~~

在上述代码中，我们使用 AppendArgument 将参数类型 string 追加到 Add 函数类型中，得到了新的函数类型 AddWithC。

现在，我们可以使用 AddWithC 来声明变量或进行类型约束：
~~~ ts
const addWithC: AddWithC = (a, b, c) => {
  console.log(c);
  return a + b;
};
~~~

在上述代码中，addWithC 是一个满足 AddWithC 类型约束的函数，它接受三个参数 a、b 和 c，并在函数体中打印出参数 c 的值，并返回 a + b 的结果。

需要注意的是，AppendArgument 只能在函数类型中追加参数，而不能用于接口或类的成员。
#### 小结：
TS AppendArgument 是一个类型工具，用于在函数类型中追加一个参数。通过使用 AppendArgument，可以方便地在函数类型中添加额外的参数，而无需重新定义函数类型。这样可以提高代码的可读性和可维护性，以及类型安全性。
### Combination
在 TypeScript 中，Combination 是一个类型工具，用于将多个类型组合成一个新的类型。它可以通过使用交叉类型和联合类型来实现类型的组合。

交叉类型（Intersection Types）：
交叉类型是将多个类型合并为一个类型的方式。通过使用 & 运算符，可以将多个类型的属性和方法合并到一个新的类型中。
例如，假设有两个类型 A 和 B：
~~~ ts
type A = {
  name: string;
};

type B = {
  age: number;
};
~~~

现在，我们可以使用交叉类型将类型 A 和类型 B 组合成一个新的类型 C：
~~~ ts
type C = A & B;
~~~

在上述代码中，C 是类型 A 和类型 B 的交叉类型，它包含了 A 和 B 的所有属性和方法。

联合类型（Union Types）：
联合类型是将多个类型定义为一个类型的方式。通过使用 | 运算符，可以将多个类型组合成一个新的类型，表示该类型可以是其中任意一个类型。
例如，假设有两个类型 A 和 B：
~~~ ts
type A = {
  name: string;
};

type B = {
  age: number;
};
~~~

现在，我们可以使用联合类型将类型 A 和类型 B 组合成一个新的类型 C：
~~~ ts
type C = A | B;
~~~

在上述代码中，C 是类型 A 和类型 B 的联合类型，表示 C 可以是 A 或 B 中的任意一个类型。

需要注意的是，交叉类型和联合类型可以结合使用，形成更复杂的类型组合。

例如，假设有三个类型 A、B 和 C：
~~~ ts
type A = {
  name: string;
};

type B = {
  age: number;
};

type C = {
  gender: string;
};
~~~

现在，我们可以使用交叉类型和联合类型将类型 A、B 和 C 组合成一个新的类型 D：
~~~ ts
type D = A & (B | C);
~~~

在上述代码中，D 是类型 A 和 (B | C) 的交叉类型，表示 D 包含了 A 的所有属性，并且可以是 B 或 C 中的任意一个类型。

通过使用交叉类型和联合类型，可以灵活地组合多个类型，以满足不同的需求。这样可以提高代码的可读性、可维护性和类型安全性，使代码更具灵活性和复用性。
### Concat
在 TypeScript 中，Concat 是一个类型工具，用于将多个数组类型合并成一个新的数组类型。它可以通过使用联合类型和元组类型来实现数组类型的合并。
~~~ ts
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
~~~

Concat 接受两个泛型参数 T 和 U，分别表示待合并的两个数组类型。

使用 Concat，可以定义一个新的类型，该类型将两个数组类型 T 和 U 合并成一个新的数组类型。

例如，假设有两个数组类型 A 和 B：
~~~ ts
type A = [number, string];
type B = [boolean];
~~~

现在，我们可以使用 Concat 将类型 A 和类型 B 合并成一个新的类型 C：
~~~ ts
type C = Concat<A, B>;
~~~

在上述代码中，C 是类型 A 和类型 B 的合并类型，它是一个包含了 A 和 B 中所有元素的新的数组类型。

使用方法如下：
~~~ ts
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type A = [number, string];
type B = [boolean];
type C = Concat<A, B>;

const arr1: A = [1, 'hello'];
const arr2: B = [true];
const arr3: C = [...arr1, ...arr2];
console.log(arr3); // [1, 'hello', true]
~~~

在上述代码中，我们定义了三个数组变量 arr1、arr2 和 arr3。arr1 是类型 A 的数组，arr2 是类型 B 的数组。然后，我们使用数组扩展操作符将 arr1 和 arr2 的元素合并到 arr3 中，并打印 arr3 的结果。

通过使用 Concat，我们可以方便地将多个数组类型合并成一个新的数组类型，提供更灵活的数组操作方式。

### Exclude

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







### Omit

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



### Pick
在 TypeScript 中，Pick 是一个内置的工具类型，它允许你从一个给定的类型中选择指定的属性并创建一个新的类型。

Pick 的语法如下所示：
~~~ ts
Pick<T, K>
~~~

其中，T 是要选择属性的源类型，K 是要选择的属性的键的联合类型。

使用 Pick 可以在编译时对类型进行约束，只选择指定的属性，而忽略其他属性。

例如，假设有一个类型 Person，包含 name、age 和 address 属性：
~~~ ts
type Person = {
  name: string;
  age: number;
  address: string;
};
~~~

现在，我们使用 Pick 来选择 Person 类型中的 name 和 age 属性：
~~~ ts
type PersonInfo = Pick<Person, 'name' | 'age'>;
~~~

在上述代码中，PersonInfo 类型是从 Person 类型中选择了 name 和 age 属性，而忽略了 address 属性。

在使用 Pick 后，我们可以使用 PersonInfo 类型来创建新的对象或对现有对象进行类型约束：
~~~ ts
const person: PersonInfo = {
  name: 'John',
  age: 25,
};
~~~

在上述代码中，person 对象使用 PersonInfo 类型进行约束，只有 name 和 age 属性是允许的。

需要注意的是，Pick 只选择指定的属性，并不会改变属性的可选性或只读性。如果源类型中的属性是可选的，那么在 Pick 后，新类型中的属性也是可选的。

另外，Pick 可以与其他工具类型（如 Partial、Required 等）一起使用，以进一步调整类型的可选性和只读性。
#### 小结：
TS Pick 是一个内置的工具类型，在 TypeScript 中用于从一个给定的类型中选择指定的属性并创建一个新的类型。它可以在编译时对类型进行约束，忽略不需要的属性。使用 Pick，可以灵活地选择需要的属性，并在代码中增加类型安全性。
### type 和 interface 区别
在 TypeScript 中，type 和 interface 都可以用来定义自定义的类型，但它们有一些不同之处，并在不同的使用场景中有不同的适用性。

1. 语法：
- type 使用关键字 type，后面跟着自定义的类型名称。
- interface 使用关键字 interface，后面跟着自定义的类型名称。
2. 定义方式：
   type 可以直接定义一个类型，可以是基本类型、联合类型、交叉类型、函数类型等。例如：
~~~ ts
type Name = string;
type Age = number;

type Person = {
  name: Name;
  age: Age;
};

type Greeting = (name: string) => string;
~~~

- interface 用于定义一个对象类型，可以包含属性和方法的声明。例如：
~~~ ts
interface Person {
  name: string;
  age: number;
}

interface Greeting {
  (name: string): string;
}
~~~

3. 合并声明：
   type 可以使用交叉类型（&）来合并多个类型声明。例如：
~~~ ts
type A = { name: string };
type B = { age: number };
~~~

- type AB = A & B;
  interface 可以使用 extends 关键字来合并多个接口声明。例如：
~~~ ts
interface A {
  name: string;
}

interface B {
  age: number;
}

interface AB extends A, B {}
~~~

- 可选属性：
  type 可以使用 ? 来定义可选属性。例如：
~~~ ts
type Person = {
  name: string;
  age?: number;
};
~~~

- interface 可以使用 ? 来定义可选属性。例如：
~~~ ts
interface Person {
  name: string;
  age?: number;
}
~~~

- 只读属性：
  type 可以使用 readonly 关键字来定义只读属性。例如：
~~~ ts
type Person = {
  readonly name: string;
}
~~~

- interface 可以使用 readonly 关键字来定义只读属性。例如：
~~~ ts
interface Person {
  readonly name: string;
}
~~~

- 实现继承：
  type 不能直接实现继承，它主要用于定义类型别名和联合类型。
  interface 可以使用 extends 关键字来实现继承其他接口。例如：
~~~ ts
interface A {
  name: string;
}

interface B extends A {
  age: number;
}
~~~
#### 小结：
- type 主要用于定义类型别名和联合类型，可以直接定义各种类型。它适用于需要创建复杂类型的情况。
- interface 主要用于定义对象类型，可以包含属性和方法的声明。它适用于定义对象的结构和实现继承。通常在开发中更常用 interface 来定义对象类型。
- 在实际开发中，type 和 interface 可以根据具体需求进行选择，它们并不是互斥的。有时候可以混合使用它们来定义复杂的类型。


### readonly

可以将readonly关键字用在以下位置：

  - 类的成员变量
  - 类的构造函数参数
  - 对象字面量中的属性

1. 类的成员变量：
在类中，可以使用readonly关键字来定义只读属性。这意味着只读属性只能在声明时或构造函数中进行赋值，之后不能再被修改。例如：

```ts

// 类的成员变量

class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

const person = new Person('John');
console.log(person.name);  // 输出: John

person.name = 'Mike';  // 错误，不能修改只读属性
```

在上面的例子中，name属性在声明时被定义为只读属性，所以在构造函数中可以给它赋值，但之后就不能再修改它的值。

2. 类的构造函数参数：
readonly关键字也可以用于类的构造函数参数，用来定义只读参数。这样定义的参数可以在类中使用，但不能再被修改，例如：

```ts

class Person {
  constructor(readonly name: string) {}
}

const person = new Person('John');
console.log(person.name);  // 输出: John

person.name = 'Mike';  // 错误，不能修改只读属性
```

在上面的例子中，name参数在构造函数的参数列表中使用readonly关键字定义为只读参数。这样在构造函数中可以直接使用name参数，并且在之后不能再修改它的值。

3. 对象字面量中的属性：
在对象字面量中，可以使用readonly关键字来定义只读属性。这样定义的属性只能在声明时进行赋值，之后不能再修改它的值。例如：

```ts

const person: { readonly name: string } = { name: 'John' };

console.log(person.name);  // 输出: John

person.name = 'Mike';  // 错误，不能修改只读属性

```

在上面的例子中，name属性被定义为只读属性，所以在对象字面量中可以给它赋值，但之后就不能再修改它的值。

#### 小结：
readonly关键字用于创建只读属性，一旦被赋值后，就不能再被修改。它可以应用于类的成员变量、类的构造函数参数以及对象字面量中的属性。只读属性在声明时或构造函数中进行赋值，之后不能再修改。这样可以在代码中确保某些属性的值不会被意外地修改。