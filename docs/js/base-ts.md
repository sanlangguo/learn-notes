# TS学习笔记

## 第一部分：基础知识

### 第1章：介绍TypeScript
- TypeScript是什么
- TypeScript的优点
- TypeScript的缺点
- TypeScript和JavaScript的关系
    
- 优点：
    
    1. 静态类型检查：TypeScript可以在编译时检查代码的类型错误，可以避免在运行时出现类型错误，提高了代码的可靠性和可维护性。
    2. 更好的IDE支持：TypeScript提供了更好的IDE支持，可以提供更好的代码补全、错误提示和重构功能等。
    3. 更好的可读性：TypeScript可以让代码更易读，因为它可以提供更好的类型注释和代码结构。
    4. 更好的可维护性：TypeScript可以让代码更易于维护，因为它可以提供更好的类型检查和代码结构。
    5. 更好的生态系统：TypeScript可以让开发者更容易地使用JavaScript库和框架，因为它可以提供更好的类型定义和类型检查。

- 缺点：
    1. 学习成本高：TypeScript需要学习新的语法和类型系统，对于新手来说可能需要一些时间来适应。
    2. 开发效率低：由于需要编写类型注释和类型定义，TypeScript开发的效率可能比JavaScript低。
    3. 集成问题：TypeScript需要与其他工具和框架进行集成，可能需要一些额外的配置和学习成本。
    4. 运行时性能问题：由于需要进行类型检查和转换，TypeScript的运行时性能可能比JavaScript低。

- TypeScript和JavaScript的关系

    TypeScript和JavaScript有着密切的关系，可以说TypeScript是JavaScript的超集。具体来说，TypeScript扩展了JavaScript的语法，为JavaScript添加了一些新的特性，如静态类型检查、类和接口等面向对象编程的特性。同时，TypeScript还可以编译成JavaScript代码，这意味着TypeScript代码可以在任何支持JavaScript的环境中运行。

    TypeScript是建立在JavaScript之上的，它可以使用JavaScript中的所有特性，同时还可以添加一些新的特性。TypeScript代码可以通过编译器编译成JavaScript代码，这意味着TypeScript代码可以在任何支持JavaScript的环境中运行，如浏览器、Node.js等。

    总的来说，TypeScript和JavaScript是密切相关的，TypeScript扩展了JavaScript的语法和特性，同时又保持了与JavaScript的兼容性，这使得TypeScript成为了一种非常有用的编程语言。

### 第3章：基本类型和变量声明
- 元组类型
    
    在TypeScript中，元组（tuple）类型是一种特殊的数组，它允许表示一个已知长度和元素类型的数组，每个元素的类型可以不同。
    
    元组类型的语法是使用方括号 [] 定义一个数组，其中包含每个元素的类型，如 [type1, type2, ..., typeN]，可以通过使用下标进行访问。
    
    例如，我们可以定义一个包含多个数据类型的元组：
    
    ``` js
    
    let tuple: [string, number, boolean];
    tuple = ["hello", 123, true];
    
    ```
    
    上面的代码中定义了一个元组变量 tuple，包含三个元素，分别是字符串类型、数字类型和布尔类型，然后给该变量赋值为一个具体的元素数组。
    
    在访问元组元素时，可以使用下标来进行索引：
    
    ``` js
    
    console.log(tuple[0]);// 输出 "hello"
    console.log(tuple[1]);// 输出 123
    console.log(tuple[2]);// 输出 true
    ```
    
    需要注意的是，元组类型可以作为参数传递给函数和返回值类型。在使用元组时，请确保访问的元素不越界，否则会导致运行时错误。
    
    - 枚举类型
    
    在 TypeScript 中，枚举类型是一种特殊的数据类型，用于定义命名常量的集合。使用枚举类型可以使代码更加清晰和易读。
    
    在 TypeScript 中，枚举类型可以使用关键字 `enum` 定义，如下所示：
    
    ``` js
    
    enum Color {
      Red,
      Green,
      Blue
    }
    
    ```
    
    上面的代码中，定义了一个名为 `Color` 的枚举类型，其中包含三个枚举常量 `Red`、`Green` 和 `Blue`，它们默认对应数字值 `0`、`1` 和 `2`。
    
    使用枚举类型时，可以通过常量名或常量值来引用枚举常量。例如：
    
    ``` js
    
    const color1 = Color.Red;// 常量 color1 的值为 0
    const color2 = Color[1];// 常量 color2 的值为 'Green'
    ```
    
    以上代码中，常量 `color1` 的值为枚举常量 `Red` 的默认数字值 `0`，而常量 `color2` 的值为数字值 `1` 对应的枚举常量 `Green` 的名称字符串 `'Green'`。
    
    另外，我们还可以指定每个枚举常量的数字值。例如：
    
    ``` js
    
    enum Color {
      Red = 1,
      Green = 2,
      Blue = 4
    }
    
    ```
    
    上面的代码中，枚举常量 `Red` 的值为 `1`，`Green` 的值为 `2`，`Blue` 的值为 `4`。在 TypeScript 中，枚举常量可以是数字或字符串类型。
    
    总结：
    
    TypeScript 中的枚举类型是用于定义命名常量集合的特殊数据类型，使用关键字 `enum` 定义。每个枚举常量对应一个数字或字符串值，默认从 `0` 开始递增。我们也可以手动指定每个枚举常量的值。
    
    - Any类型
    
    在 TypeScript 中，Any 类型表示任何类型，即可以是任意类型的值。使用 Any 类型可以在编写代码时不对类型进行限制，从而实现更灵活的编程。
    
    Any 类型的变量可以接受任何类型的值，例如：
    
   ``` js
    
    let anyValue: any;
    anyValue = 123;
    anyValue = "hello";
    anyValue = true;
    
    ```
    
    在使用 Any 类型时需要注意，因为 Any 类型可以表示任何类型，所以它的值在编译时不会进行类型检查，这意味着任何类型的值都可以赋给 Any 类型的变量，也可以从 Any 类型的变量中获取任何类型的值。这种灵活性可能会导致一些潜在的类型错误，在使用 Any 类型时需要谨慎。
    
    另外，如果使用 Any 类型过于频繁，会导致代码的可读性和可维护性降低，因为无法清楚地知道变量的实际类型。因此，在编写 TypeScript 代码时应该尽量避免使用 Any 类型，而是使用更具体的类型来进行类型限制。
    
    - Void类型
    
    在 TypeScript 中，Void 类型表示没有任何类型，即函数没有返回值。使用 Void 类型可以在函数声明时指定函数不返回任何值。
    
    例如，下面的函数声明返回类型为 Void：
    
    ``` js
    function logMessage(message: string): void {
      console.log(message);
    }
    ```
    
    在函数执行完后，它不会返回任何值，因此可以将其返回类型指定为 Void。
    
    需要注意的是，Void 类型只能用于函数的返回值类型，不能用于变量的类型。如果一个变量的类型为 Void，那么它只能被赋值为 undefined 或 null：
    
    ``` js
    
    let voidValue: void;
    voidValue = undefined;
    voidValue = null;
    ```
    
    因为 Void 类型表示没有任何类型，所以它的主要作用是在函数声明时指定函数没有返回值，从而提高代码的可读性和可维护性。
    
    - Null和Undefined类型
    
    `null` 和 `undefined` 是 TypeScript 中的特殊数据类型，用来表示缺少值或者非法值。
    
    `null` 类型表示一个空对象指针或者不存在的对象，表示一个变量已经被赋予了一个空值。在 TypeScript 中，`null` 是一个独立的数据类型，可以使用关键字 `null` 来表示，例如：
    
    ``` js
    
    let a: null = null;
    ```
    
    上面的代码中，定义了一个变量 `a`，类型为 `null`，并将其赋值为 `null`。
    
    `undefined` 类型表示一个未定义的值或者缺省值，表示一个变量没有被赋值或者对象没有定义相应的属性。在 TypeScript 中，`undefined` 也是一个独立的数据类型，可以使用关键字 `undefined` 来表示，例如：
    
   ``` js
    
    let b: undefined = undefined;
    
    ```
    
    上面的代码中，定义了一个变量 `b`，类型为 `undefined`，并将其赋值为 `undefined`。
    
    需要注意的是，`null` 和 `undefined` 常常作为其他数据类型的子类型使用，表示这些类型的变量既可以存储对应的值，也可以存储 `null` 或 `undefined`。例如，下面的代码演示了如何使用 `null` 和 `undefined` 作为其他类型的子类型：
    
    ``` js
    
    let c: string | null = null;
    // 变量 c 的类型为 string 或 nulllet d: number | undefined;
    // 变量 d 的类型为 number 或 undefinedlet e: string | null | undefined;
    // 变量 e 的类型为 string、null 或 undefined
    ```
    
    除了可以将 `null` 和 `undefined` 作为其他类型的子类型使用之外，我们还可以使用 `void` 类型来表示一个函数没有返回值，即返回值为 `undefined`。例如：
    
   ``` js
    
    function sayHello(): void {
        console.log("Hello");
    }
    
    ```
    
    上面的代码定义了一个名为 `sayHello` 的函数，该函数没有返回值，即返回值类型为 `void`。
    
    综上所述，`null` 和 `undefined` 是 TypeScript 中用来表示缺少和非法值的特殊数据类型，常常作为其他类型的子类型使用，用于表示变量既可以存储对应的值，也可以存储 `null` 或 `undefined`。`void` 类型表示一个函数没有返回值，即返回值为 `undefined`。
    
    - Never类型
    
    在 TypeScript 中，`never` 类型表示永远不会出现的值的类型，通常用于表示不可能存在的错误情况或者异常情况的返回类型。它是所有类型的子类型，包括 `any` 类型。
    
    在实际开发中，我们需要定义一些函数或方法，当输入参数无法处理时，就会抛出异常或终止程序的执行，此时就可以使用 `never` 类型作为返回值类型。下面是一个示例：
    
    ``` js
    
    function throwError(message: string): never {
        throw new Error(message);
    }
    
    ```
    
    上面的代码定义了一个名为 `throwError` 的函数，该函数接收一个字符串类型的参数 `message`，并且永远不会有返回值，而是直接抛出了一个 `Error` 异常。因此，这个函数的返回类型应该是 `never`。
    
    另外，当函数内部出现无限循环、无法到达终止点或者调用了一个也返回 `never` 类型的函数时，函数的返回类型也应该是 `never`。例如：
    
    ``` js
    
    function infiniteLoop(): never {
        while (true) {}
    }
    ```
    
    上面的示例展示了一个死循环的例子，它永远不会结束，因此函数的返回类型是 `never`。
    
    总之，`never` 类型在 TypeScript 中表示不可能存在的值的类型，通常用于表示不可能存在的错误情况或异常情况的返回类型，当函数内部出现无限循环、无法到达终止点或者调用了一个也返回 `never` 类型的函数时，函数的返回类型也应该是 `never`。
    
    - 类型断言
    
    在 TypeScript 中，类型断言（Type Assertion）是一种告诉编译器变量的类型的方式。它可以用来手动指定一个值的类型，从而绕过 TypeScript 的类型检查。
    
    类型断言有两种形式：尖括号语法和 as 语法。
    
    尖括号语法：
    
   ``` js
    
    let someValue: any = "hello world";
    let strLength: number = (<string>someValue).length;
    ```
    
    as 语法：
    
    ``` js
    
    let someValue: any = "hello world";
    let strLength: number = (someValue as string).length;
    ```
    
    这两种形式的效果是一样的，它们都将 someValue 断言为 string 类型，然后获取其 length 属性。
    
    需要注意的是，类型断言并不会真正地转换变量的类型，它只是告诉编译器这个变量应该被当做什么类型来使用。如果类型断言不正确，就会导致运行时错误。
    
    另外，如果一个变量已经被 TypeScript 推断出了类型，那么就不需要使用类型断言了。只有在某些情况下 TypeScript 无法推断出变量类型时，才需要使用类型断言。
    
    - 变量声明

在 TypeScript 中，有多种方式可以声明变量，包括关键字 `let`、`const` 和 `var`。下面分别对它们进行详细介绍：

### let 声明

`let` 声明用于声明一个块级作用域的变量，可以通过赋值语句来初始化变量的值。例如：

``` js

let a: number = 10;
```

上面的代码定义了一个名为 `a` 的变量，类型为 `number`，并将其赋值为 `10`。

需要注意的是，`let` 声明的变量只在其声明的块级作用域内有效，如果在同一作用域内重复声明同名变量会引发编译错误。

### const 声明

`const` 声明用于声明一个常量，一旦被赋值之后就不能再被修改。例如：

``` js

const b: string = "hello";
```

上面的代码定义了一个名为 `b` 的常量，类型为 `string`，并将其赋值为 `"hello"`。

需要注意的是，与 `let` 声明不同，`const` 声明的变量在声明时必须进行初始化赋值，并且不能在之后修改其值。

### var 声明

`var` 声明用于声明一个全局或函数作用域的变量，可以通过赋值语句来初始化变量的值。例如：

``` js

var c: string = "world";
```

上面的代码定义了一个名为 `c` 的变量，类型为 `string`，并将其赋值为 `"world"`。

需要注意的是，`var` 声明的变量存在变量提升的特性，在函数内部使用 `var` 声明的变量会被提升到函数的顶部。此外，由于 `var` 存在变量提升的特性，也可能会导致多次声明同名变量而不会引发编译错误。

综上所述，`let`、`const` 和 `var` 是 TypeScript 中用于声明变量的关键字，它们分别用于声明块级作用域变量、常量和全局或函数作用域变量。在实际开发中，我们应该根据实际需求来选择合适的声明方式。

## 第二部分：面向对象编程

### 第4章：类和接口

- 类的定义和使用
- 类的继承
- 抽象类
- 接口的定义和使用

### 类的定义和使用

在 TypeScript 中，我们可以使用 `class` 关键字来定义类。下面是一个示例：

``` js

class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

```

上面的代码定义了一个名为 `Person` 的类，包含一个私有属性 `name` 和一个公共方法 `getName()`。其中，构造函数用于初始化实例对象时的属性值。

我们可以通过以下方式来使用这个类：

``` js

const person = new Person("张三");
console.log(person.getName());// 输出：张三
```

### 类的继承

在 TypeScript 中，类还支持继承。通过继承，我们可以让一个类从另一个类中继承属性和方法。下面是一个示例：

``` js

class Student extends Person {
  private grade: number;
  constructor(name: string, grade: number) {
    super(name);
    this.grade = grade;
  }
  public getGrade(): number {
    return this.grade;
  }
}

```

上面的代码定义了一个名为 `Student` 的类，继承了之前定义的 `Person` 类，同时新增了一个私有属性 `grade` 和一个公共方法 `getGrade()`。

我们可以通过以下方式来使用这个类：

``` js

const student = new Student("李四", 90);
console.log(student.getName());
// 输出：李四console.log(student.getGrade());// 输出：90
```

### 抽象类

在 TypeScript 中，我们也可以使用抽象类来定义一些不能直接实例化的类。抽象类只能用作其他类的基类，不能直接用于创建对象。下面是一个示例：

``` js

abstract class Animal {
  public abstract makeSound(): void;
}

```

上面的代码定义了一个名为 `Animal` 的抽象类，包含一个抽象方法 `makeSound()`，该方法没有具体的实现逻辑。

我们可以通过派生类来实现抽象方法：

``` js

class Dog extends Animal {
  public makeSound(): void {
    console.log("汪汪汪");
  }
}

```

上面的代码定义了一个名为 `Dog` 的类，继承了之前定义的抽象类 `Animal`，同时实现了抽象方法 `makeSound()`。

### 接口的定义和使用

在 TypeScript 中，我们可以使用接口来描述对象的形状。接口定义了对象应该具有哪些属性和方法，但不提供具体的实现。下面是一个示例：

``` js

interface Person {
  name: string;
  age: number;
  sayHi(): void;
}

```

上面的代码定义了一个名为 `Person` 的接口，描述了一个人的基本信息和说话的行为，但并没有提供具体的实现逻辑。

我们可以通过以下方式来使用这个接口：

``` js

const person: Person = {
  name: "张三",
  age: 18,
  sayHi: function() {
    console.log(`我叫${this.name}，今年${this.age}岁`);
  }
};
person.sayHi();// 输出：我叫张三，今年18岁
```

需要注意的是，接口只描述了对象应该具有哪些属性和方法，而并不限制对象的具体实现方式。因此，我们可以自由地在对象上添加其他属性和方法。

综上所述，类和接口是 TypeScript 中非常重要的概念，可以帮助我们更好地组织代码，提高代码的可读性和可维护性。我们应该根据实际需求来选择合适的声明方式

### 第5章：函数和泛型
- 函数的定义和使用
- 函数类型
- 可选参数和默认参数
- 剩余参数
- 泛型的定义和使用
- 泛型约束
    
### 函数和泛型
    
在 TypeScript 中，函数和泛型都是一等公民，可以被灵活地使用。
    
- 函数：函数是一个可执行的代码块，它接收输入参数并返回输出参数。
- 泛型：泛型是一种通用的类型，可以用于描述不同类型之间的相似性，并使代码更加灵活和可重用。
    
    下面是一个示例：
    
    ``` js
    
    function identity<T>(arg: T): T {
      return arg;
    }
    ```
    
    上面的代码定义了一个名为 `identity` 的函数，使用了泛型类型参数 `T`。该函数接收一个类型为 `T` 的参数 `arg`，并返回该参数的值。
    
    我们可以通过以下方式来调用这个函数：
    
    ``` js
    
    const result1 = identity("hello");
    // 返回值类型为 string 
    const result2 = identity(123);
    // 返回值类型为 number
    ```
    
    在调用时，可以明确指定泛型参数的类型，也可以让 TypeScript 根据参数类型自动推断出泛型参数的类型。这使得代码更加灵活和可读。
    
    ### 函数的定义和使用
    
    在 TypeScript 中，函数的定义和使用与 JavaScript 类似。下面是一个示例：
    
   ``` js
    
    function greet(name: string): void {
      console.log(`Hello, ${name}!`);
    }
    greet("world");// 输出：Hello, world!
    ```
    
    上面的代码定义了一个名为 `greet` 的函数，接收一个类型为 `string` 的参数 `name`，并输出一句问候语。
    
### 函数类型
    
在 TypeScript 中，函数也有自己的类型。函数类型包含函数输入参数类型和返回值类型的定义。下面是一个示例：
    
``` js
    
    type GreetFunction = (name: string) => void;
    const greet: GreetFunction = function(name: string): void {
      console.log(`Hello, ${name}!`);
    };
    greet("world");// 输出：Hello, world!
```

上面的代码先使用 `type` 关键字定义了一个名为 `GreetFunction` 的函数类型，接着定义了一个名为 `greet` 的函数，并将其赋值给一个类型为 `GreetFunction` 的变量。这样可以明确指定函数类型，从而提高代码的可读性和可维护性。
    
### 可选参数和默认参数
    
- 在 TypeScript 中，函数的参数可以有两种类型：可选参数和默认参数。
    
- 可选参数：通过在参数名后面添加 `?` 标记来表示该参数是可选的。
- 默认参数：通过在参数名后面添加等号 `=` 和默认值来表示该参数的默认值。
    
    下面是一个示例：
    
   ``` js
    
    function greet(name: string, age?: number, message: string = "Hello"): void {
      const greeting = `${message}, ${name}`;
      if (age !== undefined) {
        greeting += `, age ${age}`;
      }
      console.log(greeting);
    }
    greet("Alice");// 输出：Hello, 
    Alicegreet("Bob", 25);// 输出：Hello, Bob, age 25
    greet("Charlie", 30, "Hi");// 输出：Hi, Charlie, age 30
    ```
    
    上面的代码定义了一个名为 `greet` 的函数，接收三个参数：`name`、`age` 和 `message`。其中，`age` 和 `message` 是可选的，默认值分别是 `undefined` 和 `"Hello"`。如果传入了 `age` 参数，会在输出中加入对年龄的说明。
    
    ### 剩余参数
    
    在 TypeScript 中，我们还可以使用剩余参数语法来接收任意数量的参数，并将它们作为一个数组来处理。剩余参数可以在参数列表的最后一个位置使用，通过 `...` 来标记。
    
    下面是一个示例：
    
    ``` js
    
    function sum(...numbers: number[]): number {
      return numbers.reduce((total, num) => total + num, 0);
    }
    console.log(sum());// 输出：0
    console.log(sum(1, 2, 3));// 输出：6
    console.log(sum(4, 5, 6, 7));// 输出：22
    ```
    
    上面的代码定义了一个名为 `sum` 的函数，接收任意数量的数字参数，并返回它们的总和。
    
    ### 泛型的定义和使用
    
    在 TypeScript 中，泛型用于描述不同类型之间的相似性，可以使用泛型类型参数来定义函数、类等通用的数据结构和算法。下面是一个示例：
    
    ``` js
    
    function identity<T>(arg: T): T {
    	  return arg;
    }
    console.log(identity("hello"));// 输出：hello
    console.log(identity(123));// 输出：123
    ```
    
    上面的代码定义了一个名为 `identity` 的函数，使用了泛型类型参数 `T`。该函数接收一个类型为 `T` 的参数 `arg`，并返回该参数的值。调用时可以明确指定泛型参数的类型，也可以让 TypeScript 根据参数类型自动推断出泛型参数的类型。
    
    ### 泛型约束
    
    在 TypeScript 中，我们还可以使用泛型约束来限制泛型类型参数的类型范围。泛型约束可以使用 `extends` 关键字来定义。
    
    下面是一个示例：
    
    ``` js
    
    interface Lengthwise {
      length: number;
    }
    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(`length of ${arg}: ${arg.length}`);
      return arg;
    }
    console.log(loggingIdentity("hello"));// 输出：length of hello: 5
    console.log(loggingIdentity([1, 2, 3]));// 输出：length of 1,2,3: 3
    console.log(loggingIdentity({ length: 4 }));// 输出：length of [object Object]: 4
    ```
    
    上面的代码定义了一个名为 `Lengthwise` 的接口，包含一个数字属性 `length`。接着定义了一个名为 `loggingIdentity` 的函数，使用了泛型类型参数 `T`，并使用了泛型约束 `extends Lengthwise`，表示泛型类型参数必须符合 `Lengthwise` 接口的要求。
    
    调用 `loggingIdentity` 函数时，传入了三个不同类型的参数：字符串、数组和一个自定义对象。由于它们都符合 `Lengthwise` 接口的要求，因此可以正常输出结果。
    
    综上所述，函数和泛型是 TypeScript 中非常重要的概念，可以帮助我们更好地组织代码，提高代码的可读性和可维护性。我们应该根据实际需求来选择合适的声明方式，并善于使用泛型约束等技巧来提高代码的类型安全性和健壮性。
    

## 第三部分：高级特性

### 第6章：模块
- 模块的概念和使用
- 模块的导入和导出
- 命名空间
    
    ### **模块**
    
    在 TypeScript 中，模块是一种组织代码的方式，它将相关的代码放在一个独立的文件中，从而实现代码的复用和分离。
    
    ### **模块的概念和使用**
    
    模块的定义使用 export 关键字，例如：
    
    ``` js
    
    // person.ts
    export class Person {
      name: string;
      age: number;
    
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    
      sayHello() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
      }
    }
    ```
    
    上面的代码定义了一个 Person 类，并使用 export 关键字将其导出。
    
    在另一个文件中，可以使用 import 关键字导入该模块：
    
    ``` js
    
    // main.ts
    import { Person } from "./person";
    
    let person = new Person("Tom", 18);
    person.sayHello();
    
    ```
    
    上面的代码导入了 person.ts 文件中导出的 Person 类，并创建了一个 person 对象。
    
    ### **模块的导入和导出**
    
    模块的导入和导出使用 import 和 export 关键字，例如：
    
    ``` js
    
    // person.ts
    export class Person {
      // ...
    }
    
    // main.ts
    import { Person } from "./person";
    
    ```
    
    上面的代码中，person.ts 文件中的 Person 类被导出，main.ts 文件中使用 import 关键字导入该模块。
    
    ### **命名空间**
    
    命名空间是一种将代码隔离到独立的命名空间中的方式，它可以避免命名冲突和全局变量污染。
    
    命名空间的定义使用 namespace 关键字，例如：
    
   ``` js
    
    namespace MyNamespace {
      export class MyClass {
        // ...
      }
    }
    
    ```
    
    上面的代码定义了一个名为 MyNamespace 的命名空间，并在其中定义了一个 MyClass 类。在另一个文件中，可以使用该命名空间中的类：
    
    ``` js
    
    import { MyNamespace } from "./mynamespace";
    
    let myClass = new MyNamespace.MyClass();
    
    ```
    
    上面的代码中，使用 import 关键字导入了 MyNamespace 命名空间，并通过 MyNamespace.MyClass 的方式访问其中的类。
    
### 第7章：装饰器
- 装饰器的概念和使用
- 类装饰器
- 方法装饰器
- 属性装饰器
- 参数装饰器

### **装饰器**

在 TypeScript 中，装饰器是一种特殊的声明，它可以被附加到类声明、方法、属性或参数上，以修改类的行为。

### **装饰器的概念和使用**

装饰器使用 @ 符号，例如：

``` js

function log(target: any) {
  console.log(target);
}

@log
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

```

上面的代码定义了一个 log 装饰器，它会在类被声明时打印类的信息。在 Person 类上应用了 log 装饰器。

### **类装饰器**

类装饰器是应用于类声明的装饰器。类装饰器可以用来检查类的定义是否符合规范，或者修改类的行为。

``` js

function log(target: any) {
  console.log(target);
}

@log
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

```

上面的代码定义了一个 log 装饰器，并应用于 Person 类。

### **方法装饰器**

方法装饰器是应用于方法声明的装饰器。方法装饰器可以用来检查方法的定义是否符合规范，或者修改方法的行为。

``` js

function log(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @log
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

```

上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 sayHello 方法。

### **属性装饰器**

属性装饰器是应用于属性声明的装饰器。属性装饰器可以用来检查属性的定义是否符合规范，或者修改属性的行为。

``` js

function log(target: any, name: string) {
  console.log(target);
  console.log(name);
}

class Person {
  @log
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

```

上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 name 属性。

### **参数装饰器**

参数装饰器是应用于参数声明的装饰器。参数装饰器可以用来检查参数的定义是否符合规范，或者修改参数的行为。

``` js

function log(target: any, name: string, index: number) {
  console.log(target);
  console.log(name);
  console.log(index);
}

class Person {
  name: string;
  age: number;

  constructor(name: string, @log age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old.`);
  }
}

```

上面的代码定义了一个 log 装饰器，并应用于 Person 类中的 age 参数。

### 第8章：命名空间和模块的混合使用
- 命名空间和模块的区别
- 命名空间和模块的混合使用

### **命名空间和模块的区别**

在 TypeScript 中，命名空间和模块都是用来组织代码的方式，但它们有一些区别。

命名空间用于在全局作用域内提供唯一的名称，以避免命名冲突。命名空间中的代码可以通过 namespace 关键字进行定义。而模块用于在文件级别上提供唯一的名称，以避免文件之间的命名冲突。模块中的代码可以通过 export 和 import 关键字进行定义和引用。

### **命名空间和模块的混合使用**

在 TypeScript 中，可以将命名空间和模块混合使用，以实现更好的代码组织和复用。例如：

``` js
// shapes.ts
export namespace Shapes {
  export class Rectangle {
    constructor(public width: number, public height: number) {}
  }
}

// app.ts
import { Shapes } from './shapes';
const rectangle = new Shapes.Rectangle(10, 20);

```

在这个例子中，我们定义了一个 `Shapes` 命名空间，并将 `Rectangle` 类导出。然后在 `app.ts` 中，我们通过 `import` 关键字引入了 `Shapes` 命名空间，并创建了一个 `Rectangle` 的实例。这样就可以在不同的文件中共享代码，同时避免了命名冲突。