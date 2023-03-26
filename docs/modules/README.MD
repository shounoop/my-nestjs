# Modules

Here are some important things to know about Modules in NestJS:

- Modules are the core building blocks of a NestJS application. They are used to organize the application into cohesive, loosely-coupled units.

- A module is defined by a class decorated with the @Module() decorator, which is imported from @nestjs/common.

- A module typically encapsulates a related set of Controllers, Providers, and other modules. For example, a UserModule might contain Controllers for managing user data, Providers for accessing user data in a database, and other modules that the UserModule depends on.

- NestJS provides several built-in modules, such as HttpModule, which provides HTTP request/response handling, and TypeOrmModule, which provides database access.

- Modules can be organized into a hierarchy, where a child module depends on a parent module. This allows for easy sharing of Providers and other resources between modules.

Here's an example of a simple module in NestJS:

```typescript
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
```

- In this example, the UserModule class is a module that encapsulates Controllers and Providers related to user data.
- The @Module() decorator specifies that this class is a module.
- The imports property specifies that the UserModule depends on the TypeOrmModule module, which provides database access.
- The controllers property specifies that the UserModule contains a UserController class, while the providers property specifies that the UserModule contains a UserService class.
