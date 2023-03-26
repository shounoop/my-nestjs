# Decorators

Here are some important things to know about Decorators in NestJS

- Decorators are a feature of TypeScript that allow you to add metadata to your classes, properties, methods, and parameters at design time.

- Decorators are used extensively in NestJS to define and configure Controllers, Providers, and other components of an application.

- NestJS provides a number of built-in decorators, such as @Module(), @Controller(), @Injectable(), and @Get(), among others.

- Decorators are usually placed immediately before the class, property, method, or parameter they are modifying, and are prefixed with the @ symbol.

- Here's an example of a simple Decorator in NestJS:

  ```typescript
  import { Injectable } from '@nestjs/common';

  @Injectable()
  export class UserService {
    getUsers(): string[] {
      return ['Alice', 'Bob', 'Charlie'];
    }
  }
  ```

  - In this example, the @Injectable() decorator is used to mark the UserService class as a NestJS Injectable.
  - This means that the class can be injected as a dependency into other components of the application, such as Controllers or other Providers.

- Decorators can also be used with class properties, methods, and parameters. For example, the @Get() decorator is used to define an HTTP GET route in a NestJS Controller:

  ```typescript
  import { Controller, Get } from '@nestjs/common';

  @Controller()
  export class UserController {
    @Get()
    getUsers(): string[] {
      return ['Alice', 'Bob', 'Charlie'];
    }
  }
  ```

  In this example, the @Controller() decorator is used to mark the UserController class as a NestJS Controller, while the @Get() decorator is used to define an HTTP GET route that maps to the getUsers() method of the Controller.
