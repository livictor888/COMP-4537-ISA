- [Lab 1 - How to use the MERN stack. An Intro.](#lab-1---how-to-use-the-mern-stack-an-intro)
  * [Objectives](#objectives)
  * [Introduction](#introduction)
- [Setting up The Server](#setting-up-the-server)
- [Routing in Express](#routing-in-express)
- [HTTP Request and Response](#http-request-and-response)
- [JSON](#json)
- [Server-to-server communication](#server-to-server-communication)
  * [Example](#example)
- [Connect the Frontend to the Backend](#connect-the-frontend-to-the-backend)
  * [Handle a POST request to our server & Using the body parser](#handle-a-post-request-to-our-server---using-the-body-parser)

# Lab 1 - How to use the MERN stack. An Intro. 
## Objectives
1 -  Setting up the development environment: This includes installing and configuring the tools and dependencies needed to build the application, such as Node.js, MongoDB, and the React framework.

2- Building the backend: This involves creating a server using Node.js and the Express.js framework, connecting to a MongoDB database, and defining routes and handling requests and responses.

3- Building the frontend: This involves creating a user interface using React and making HTTP requests to the backend to retrieve and manipulate data.

4- Connecting the backend and frontend: This involves integrating the backend and frontend of the application and testing the end-to-end functionality.

## Introduction

MERN is a stack of technologies used for building web applications. The acronym stands for MongoDB, Express, React, and Node.js. These technologies are often used together because they provide a powerful and flexible way to build web applications.

A MERN tutorial is a guide or set of instructions that teaches you how to use the MERN stack to build a web application. It might cover topics such as setting up a development environment, creating a database with MongoDB, building the backend with Node.js and Express, and creating a frontend user interface with React.

There are many resources available for learning the MERN stack, including online tutorials, books, and video courses. These resources can vary in terms of their complexity and the assumptions they make about the reader's prior knowledge, so it might be helpful to look for a tutorial that is suitable for your experience level and learning style.

During the next 14 weeks, we will delve into the specifics of the MERN stack such as deploying the application to a production environment, adding authentication and authorization, and optimizing performance. The specific steps and techniques covered in a MERN tutorial will depend on the goals and requirements of the application being built.
 
For now, we will just give a brief overview of the basics.

#  Setting up The Server

To set up the server for a MERN application, you will need to install and configure a few tools and dependencies. Here are the steps you can follow:

1- Install Node.js and npm (Node Package Manager) on your system. This will allow you to run JavaScript on the server-side and manage packages (libraries and tools) that you will use in your project.

2- Create a new directory for your project and navigate to it in the terminal.

3- Run `npm init` to create a *package.json* file, which will contain metadata about your project and a list of dependencies.

4- Install the Express.js framework, which will help you build the server-side of your application. You can do this by running `npm install express`.

5- Create a file called "server.js" and add the following code to it:


```js
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```


6- Run the server by entering node server.js in the terminal. You should see the message "Server listening on port 3000" in the console, which indicates that the server is running.
This is a basic set up for the server in a MERN application. You can now start building the rest of your application by adding routes, handling requests and responses, and connecting to a database.





#  Routing in Express
In a MERN application, routing refers to the process of defining endpoints (URLs) and the corresponding actions that will be taken when a client (such as a web browser) makes a request to these endpoints. Routing is an important aspect of a server-side application because it determines how clients can interact with the server and what they can do.

To add routing to your MERN application, you can follow these steps:

1- In the "server.js" file, require the `body-parser` library by adding the following line at the top:

```js
const bodyParser = require('body-parser');
```

2- Use body-parser to parse incoming request bodies in a middleware before your routes. Add the following lines to the "server.js" file:

```js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
```
3- Define your routes in a separate file, or add them directly to the "server.js" file. For example:

```js
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  // add the new user to the database
  res.send(newUser);
});
```

4- Test your routes by starting the server and making requests to the endpoints using a tool such as Postman.
This is a basic example of how to set up routing in a MERN application using the Express.js framework. You can define more complex routes and add additional logic as needed for your application.


# HTTP Request and Response 
HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the WWW. It is a set of rules for transferring files (such as HTML, images, and videos) on the Internet and is used by web browsers and servers to communicate with each other.

An HTTP request is a message sent by a client (such as a web browser) to a server to request a specific resource or action. The request includes a method (such as GET, POST, or DELETE) that specifies the type of action being requested, as well as a URL and other optional headers and data.

An HTTP response is a message sent by the server in response to an HTTP request. It includes a status code (such as 200 for success or 404 for not found) and other optional headers and data. The response typically includes the requested resource, or an error message if the request could not be completed.


Let us send our first HTTP request to openweathermap.org API.

To make a GET request from your MERN application to an external server and parse the JSON response, you can use the Node.js request library and the axios library. Here are the steps you can follow:

1- Install the `request` and `axios` libraries by running the following command in the terminal:

```js
npm install request axios
```

2- In your route handler, use the request library to make a GET request to the external server. For example:

```js
const request = require('request');

app.get('/weather', (req, res) => {
  request.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY', (error, response, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return;
    }

    console.log(body);
    res.send(body);
  });
});
```

3- Alternatively, you can use the axios library to make the request. This library provides a simpler syntax and automatically parses the JSON response for you. For example:

```js
const axios = require('axios');

app.get('/weather', (req, res) => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY')
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});
```
In either case, the response from the external server will be a JSON object, which you can access and use in your application as needed.

This is a basic example of how to make a GET request from your MERN server to an external server and parse the JSON response. You can modify the request and the handling of the response according to your specific needs.

# JSON 
what is JSON format
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript programming language and is used to transmit data between a server and a client, or between two servers.

JSON is commonly used to transmit data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or receiving user input from a web page and sending it to the server), and is also used for storing data in NoSQL databases.

A JSON object is a collection of key-value pairs, similar to a dictionary in Python or an object in JavaScript. A JSON array is an ordered list of values, similar to a list in Python or an array in JavaScript. JSON values can be objects, arrays, strings, numbers, booleans, or null.

Here is an example of a JSON object:

```js
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```
And here is an example of a JSON array:

```js
[  {    "name": "John",    "age": 30,    "city": "New York"  },  {    "name": "Jane",    "age": 25,    "city": "San Francisco"  }]
```

# Server-to-server communication
Server-to-server communication refers to the exchange of data between two or more servers over a network. This can be done using various protocols, such as HTTP, HTTPS, FTP, or SMTP, and may involve the transmission of data in different formats, such as XML, JSON, or binary.

Server-to-server communication is often used in situations where servers need to share data or coordinate their actions, such as in distributed systems or microservices architectures. It can also be used to connect servers located in different locations or operated by different organizations.

To implement server-to-server communication, servers need to be configured to send and receive requests and responses using the chosen protocol. This may involve setting up network infrastructure, such as firewalls and load balancers, and implementing security measures, such as encryption and authentication.

There are various tools and libraries that can be used to facilitate server-to-server communication, such as HTTP clients and servers, API gateways, and message brokers. The specific tools and techniques used will depend on the requirements and constraints of the system being implemented.

## Example

To handle a POST request to your MERN server and relay it to the openweathermap.org API to get the weather of a user's city, you can follow these steps:

1- In your route handler, access the city name from the request body. For example:

```JS
app.post('/weather', (req, res) => {
  const city = req.body.city;
});
```
2- Use the request library or the axios library to make a GET request to the openweathermap.org API. You will need to include the city name in the URL and your API key in the query string. For example:

```js
const request = require('request');

app.post('/weather', (req, res) => {
  const city = req.body.city;

  request.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`, (error, response, body) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return;
    }

    console.log(body);
    res.send(body);
  });
});
```

```js
const axios = require('axios');

app.post('/weather', (req, res) => {
  const city = req.body.city;

  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
      res.sendStatus(500);
    });
});

```
3- You can then handle the response from the openweathermap.org API and send it back to the client as needed.

This is a basic example of how to handle a POST request to your MERN server and relay it to the openweathermap.org API to get the weather of a user's city. You can modify the request and the handling of the response according to your specific needs.

# Connect the Frontend to the Backend   

## Handle a POST request to our server & Using the body parser

Now, we want to enable the user to enter a city name and get live weather data from the openwathermap API through our server. Something like this:

![Get Vancouver weather](https://github.com/nabil828/comp4537repo/raw/main/Tutorials/MERN-Tutorial/images/1.gif)

- First, we will be changing the `app.get('/')` to return an html file 

```js
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
})


```
Notice how we are sending now `index.html` file back to the browser client whenever it sends a GET for the root directory of our web server. Here is the content of `index.html`:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> Live Weather Application</title>
  </head>
  <body>
    <h1> Enter City Name:</h1>

    <form method="post">

      <label> City Name</label>

      <input type="text" name="cityName" placeholder="Enter City Name">
      <input type="submit" value="submit">
    </form>

  </body>
</html>

```
Also, notice that we are using now `res.sendFile()` instead of `res.send()` to send a whole html file. In `index.html`, we have built a simple form for the user to enter the city of interest.
Once the user hit button, a POST request will be send to our server and will be caught by `app.post('/')`. Again, the argument `/` indicates that the POST request was originated from the root/home page.

- Next, we need to parse the POST request using [`body-parser`](https://www.npmjs.com/package/body-parser) module. It allows us to use the property `req.body` to get the entered city name.
copy the next lines at the begining of `server.js`:

```js
const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended: true}));
```
check out [[https://www.npmjs.com/package/body-parser]](https://www.npmjs.com/package/body-parser) for full documentation of this module/middleware.

- Finally, add the API key from your openweathermap account page.

```js
const apikey = "b660f3402c54cb9a9c48f89c35249e5c";
```
run `http://localhost:5000` on your server and Voila!
[Check out the code at this stage](https://github.com/nabil828/mern_demo/tree/e67c18b706c68bb03b9ded771ae29549836ff882) .

