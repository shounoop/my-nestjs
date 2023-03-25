# Express framework

Express is a popular web framework for Node.js, and understanding its key concepts is helpful when learning NestJS. Here are some of the main things to know about Express:

### 1. Middleware

- Middleware functions in Express are **_functions_** that have access to the request and response objects and **_can modify them, or perform additional actions before the request is handled_**.
- In Express, middleware functions can be added to the application using the use() method.
- Here is an example of how to add a simple middleware function:

  ```javascript
  const express = require('express');
  const app = express();

  // This is a middleware function that logs the request URL
  app.use((req, res, next) => {
    console.log(`Received request for ${req.url}`);
    next();
  });

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

  - In this example, the app.use() method adds a middleware function that logs the URL of each incoming request.
  - The next() method is called at the end of the middleware function to pass control to the next middleware function in the chain.

### 2. Routing

- Routing in Express is **_the process of mapping HTTP requests to specific handler functions_**.
- In Express, you can define routes using the get(), post(), put(), delete() and other methods provided by the app object.
- Here is an example of how to define a simple route:

      ```javascript
      const express = require('express');
      const app = express();

      // This is a route handler function that returns a message
      app.get('/', (req, res) => {
        res.send('Hello World!');
      });

      app.listen(3000, () => {
        console.log('Server listening on port 3000');
      });
      ```

  - In this example, the app.get() method defines a route for handling GET requests to the root path of the application ('/').
  - When a request is received for this route, the res.send() method sends the response back to the client with the message "Hello World!".

### 3. Request and response objects

- The request and response **_objects in Express contain information about the incoming request and allow you to send a response back to the client_**.
- Here is an example of how to use the request object to extract query parameters from a request:

  ```javascript
  const express = require('express');
  const app = express();

  app.get('/greet', (req, res) => {
    const name = req.query.name || 'World';
    res.send(`Hello ${name}!`);
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

  - In this example, the req.query object is used to extract query parameters from the request URL.
  - If the name parameter is not present in the request, the default value of 'World' is used instead.

### 4. Template engines

- Express provides support for template engines, **_which allow you to render dynamic HTML views_** using data from your application.
- Popular template engines for Express include Handlebars, EJS, and Pug.
- Here is an example of how to use the EJS template engine to render a simple view:

  ```javascript
  const express = require('express');
  const app = express();

  // Set the view engine to use EJS
  app.set('view engine', 'ejs');

  app.get('/', (req, res) => {
    const data = { name: 'World' };
    res.render('index', data);
  });

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
  ```

  - In this example, the app.set() method is used to set the view engine to use EJS.
  - The res.render() method is used to render the index.ejs view file with data passed in as the second parameter.
  - The index.ejs file might look something like this:

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>Greeting</title>
      </head>
      <body>
        <h1>Hello <%= name %>!</h1>
      </body>
    </html>
    ```

    In this example, the <%= name %> syntax is used to embed the value of the name property from the data object passed in to the res.render() method.

**&rarr; These are just a few examples of the key concepts in Express that you should be familiar with before learning NestJS.
&rarr; Once you have a good understanding of these concepts, you'll be well-equipped to dive into NestJS and build more complex web applications**
