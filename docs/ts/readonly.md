
#### readonly

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

#### 总结：
readonly关键字用于创建只读属性，一旦被赋值后，就不能再被修改。它可以应用于类的成员变量、类的构造函数参数以及对象字面量中的属性。只读属性在声明时或构造函数中进行赋值，之后不能再修改。这样可以在代码中确保某些属性的值不会被意外地修改。