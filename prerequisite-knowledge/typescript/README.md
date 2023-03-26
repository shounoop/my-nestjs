# Typescript

- Before diving into NestJS, it's important to have a solid understanding of TypeScript, since NestJS is built on top of it.
- Here are some key concepts in TypeScript that you should be familiar with:

  ### 1. Static Typing

  - TypeScript is a statically-typed language, which means that variables, function parameters, and return values can be typed with explicit types.
  - This helps catch errors at compile time rather than at runtime.
  - For example, here's how you can declare a variable with an explicit type:

    ```typescript
    let message: string = 'Hello, world!';
    ```

  ### 2. Classes

  - TypeScript is an object-oriented language and supports classes, which are used to encapsulate data and behavior.
  - Here's an example of a simple class in TypeScript:

    ```typescript
    class Person {
      firstName: string;
      lastName: string;

      constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
      }
    }

    const john = new Person('John', 'Doe');
    console.log(john.getFullName()); // Output: "John Doe"
    ```

  ### 3. Interfaces

  - Interfaces in TypeScript define the shape of an object or a function.
  - They can be used to ensure that objects or functions meet certain requirements.
  - Here's an example of an interface for a simple Todo object:

    ```typescript
    interface Todo {
      id: number;
      text: string;
      completed: boolean;
    }
    ```

  ### 4. Generics

  - TypeScript supports generics, which allow you to create reusable code that can work with different types.
  - For example, here's how you can create a generic function that takes an array of any type and returns the first element:

    ```typescript
    function getFirstElement<T>(arr: T[]): T {
      return arr[0];
    }

    const numbers = [1, 2, 3];
    const firstNumber = getFirstElement(numbers); // firstNumber is of type number
    const strings = ['hello', 'world'];
    const firstString = getFirstElement(strings); // firstString is of type string
    ```

**&rarr; These are just a few examples of the key concepts in TypeScript that you should be familiar with before learning NestJS.\
&rarr; Once you have a good understanding of these concepts, you'll be well-equipped to dive into NestJS and build more complex web applications.**
