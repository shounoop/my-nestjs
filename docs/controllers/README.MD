# Controllers

Here are some important things to know about Controllers in NestJS:

- Controllers are responsible for handling incoming HTTP requests and returning an HTTP response.
- Controllers are classes that are decorated with the @Controller decorator, which is imported from @nestjs/common.
- Each method in a controller is responsible for handling a specific HTTP request. For example, a GET request for a list of users might be handled by a method called getUsers, while a POST request for creating a new user might be handled by a method called createUser.
- The HTTP method that a method in a controller handles is defined using another decorator, such as @Get, @Post, @Put, or @Delete. For example, a GET request for a list of users might be handled by a method decorated with @Get('users').
- Controllers can also define parameters in their methods to capture data from the HTTP request, such as query parameters, request headers, or request bodies. For example, a GET request for a specific user might include the user ID in the URL, and a method in a controller could capture that ID using the @Param decorator.
- Here's an example of a simple controller in NestJS:

  ```javascript
  import { Controller, Get, Post, Body, Param } from '@nestjs/common';
  import { UserService } from './user.service';
  import { CreateUserDto } from './create-user.dto';

  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getUsers() {
      return this.userService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
      return this.userService.findById(id);
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
    }
  }
  ```

  - In this example, the UserController class handles HTTP requests for user data.
  - The @Controller('users') decorator specifies that this controller handles requests to the /users endpoint.
  - The @Get decorator on the getUsers method specifies that this method handles GET requests to the /users endpoint, while the @Get(':id') decorator on the getUserById method specifies that this method handles GET requests to the /users/:id endpoint, where :id is a dynamic parameter.
  - The @Post decorator on the createUser method specifies that this method handles POST requests to the /users endpoint.
  - The @Body decorator on the createUser method specifies that this method expects a request body with the CreateUserDto format, which is defined elsewhere.
  - Finally, each method calls a corresponding method in the UserService provider to handle the business logic of the request.
