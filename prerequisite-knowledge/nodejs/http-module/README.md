# HTTP module

- The HTTP module is a built-in module in Node.js that allows you to create HTTP servers and clients.
- With the HTTP module, you can make HTTP requests to other servers and create HTTP servers that can handle incoming requests.
- Here are some of the key concepts and functions of the HTTP module:

  ##### 1. Creating an HTTP server:

  - To create an HTTP server, you can use the createServer() method, which takes a callback function as its argument.
  - The callback function is called every time a new request is received by the server.
  - The callback function receives two arguments: a request object and a response object.

  ##### 2. Handling requests:

  - When a new request is received by the server, the request object contains information about the incoming request, such as the request URL, headers, and request method.
  - The response object is used to send a response back to the client.
  - You can set the response status code, headers, and body using the methods of the response object.

  ##### 3. Making HTTP requests:

  - To make an HTTP request to another server, you can use the http.request() method, which takes an options object as its argument.
  - The options object specifies the URL, method, headers, and other details of the request.
  - The http.request() method returns a request object that can be used to write the request body and handle the response.

  ##### 4. Handling responses:

  - When you make an HTTP request, you can handle the response using the callback function attached to the request object.
  - The response object contains information about the response, such as the response status code, headers, and body.
  - You can read the response body using the on() method of the response object, which allows you to read the response in chunks.

**$\rightarrow$ The HTTP module is a fundamental module in Node.js and is used extensively in web development.
$\rightarrow$ By understanding the key concepts and functions of the HTTP module, you will be able to create and handle HTTP servers and clients in your Node.js applications.**

### Example

###### 1. Creating an HTTP server:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

- In this example, we are creating an HTTP server that listens on port 3000.
- When a new request is received by the server, the callback function is called, which sets the status code, content type, and body of the response using the response object.
- Finally, the response is sent back to the client using the end() method.

###### 2. Making an HTTP request:

```javascript
const http = require('http');

const options = {
  hostname: 'example.com',
  port: 80,
  path: '/api',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const req = http.request(options, (res) => {
  console.log(`Status code: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers)}`);

  res.on('data', (chunk) => {
    console.log(`Body: ${chunk}`);
  });

  res.on('end', () => {
    console.log('Response finished.');
  });
});

req.on('error', (err) => {
  console.error(`Error: ${err}`);
});

req.end();
```

- In this example, we are making an HTTP request to the URL http://example.com/api using the http.request() method.
- We specify the method, headers, and other details of the request using the options object.
- Once the request is sent, we handle the response using the callback function attached to the request object.
- We log the status code, headers, and body of the response using the console.log() function.
