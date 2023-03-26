# Providers

Here are some important things to know about Providers in NestJS:

- Providers are classes that can be injected into other classes, such as Controllers or other Providers, using Dependency Injection (DI).

- Providers are decorated with the @Injectable decorator, which is imported from @nestjs/common.

- Providers typically encapsulate some kind of business logic or data access layer. For example, a UserService provider might handle creating, updating, and deleting user data in a database.

- Providers can also define dependencies on other Providers or built-in NestJS modules, which are injected automatically by NestJS when the Provider is used. For example, a UserService provider might depend on a UserRepository provider, which handles low-level database interactions.

- Here's an example of a simple Provider in NestJS:

  ```typescript
  import { Injectable } from '@nestjs/common';
  import { User } from './user.entity';
  import { UserRepository } from './user.repository';
  import { CreateUserDto } from './create-user.dto';

  @Injectable()
  export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async findAll(): Promise<User[]> {
      return this.userRepository.find();
    }

    async findById(id: number): Promise<User> {
      return this.userRepository.findOne(id);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
      return this.userRepository.create(createUserDto);
    }
  }
  ```

  - In this example, the UserService class is a Provider that handles business logic for user data.
  - The @Injectable decorator specifies that this class can be injected into other classes using DI.
  - The constructor of the class specifies that it depends on a UserRepository provider, which is automatically injected by NestJS when the UserService is used.
  - The findAll method returns a list of all users by calling the find method on the UserRepository, while the findById method returns a single user by calling the findOne method on the UserRepository.
  - The create method creates a new user by calling the create method on the UserRepository, using data from the CreateUserDto parameter.
