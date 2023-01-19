# Lab 2 - GPT-4 Chatbot
<blockquote>
Demo - https://inspiring-gumption-7312b7.netlify.app/
</blockquote>

# Intro - Client To Server Communication

In web development, client-to-server communication refers to the process of a client (e.g. a web browser) sending a request to a server, and the server responding with a response. This process is also known as "making a request" or "sending a request". The communication between the client and server is typically done using the HTTP (Hypertext Transfer Protocol) or HTTPS (HTTP Secure) protocol.

When a user makes a request by typing a URL in their web browser, the browser sends a request to the server, asking for the resource located at that URL. The server then responds with the requested resource, which can be in the form of HTML, CSS, JavaScript, JSON, or XML, etc. The browser then renders the resource and displays it to the user.

This process is called client-server communication as the client sends a request to the server and the server responds to the request. The client and server communicate using a request-response model, where the client sends a request and the server sends a response.

There are many libraries and frameworks that can be used for client-server communication, such as jQuery, Axios, Fetch, etc. These libraries and frameworks make it easy to send requests and handle responses from the server, and can be used to build dynamic web pages and web applications.

# http://numbersapi.com/ API

The Numbers API ([http://numbersapi.com/](http://numbersapi.com/)) provides a wide range of information about numbers in different formats, such as trivia, math, date, and year. Some use cases for using this API include:

1.  Trivia and Fun Facts: The API provides interesting and fun facts about numbers, which can be used to create trivia games, quizzes, or educational apps.
    
2.  Educational Resources: The API can be used to create educational resources, such as interactive math problems, games, or flashcards that can help students learn about numbers in an engaging way.
    
3.  Chatbots and Virtual Assistants: The API can be integrated with chatbots and virtual assistants to provide interesting and engaging responses to users' queries about numbers.
    
4.  Marketing and Advertising: The API can be used to create engaging content for marketing and advertising campaigns, such as social media posts, videos, or infographics.
    
5.  Research and Data Analysis: The API can be used to retrieve data about numbers, such as historical events, mathematical properties, or scientific facts, which can be useful for research or data analysis projects.
    
6.  Random number generator for games
    
7.  Date-based events and facts
    
8.  Creating fun and interesting games and trivia apps to entertain people
    
9.  Integrating into other apps or websites to provide interesting content.
    

Overall, the Numbers API can be used in a wide range of applications, from entertainment and education to research and data analysis, and it can be integrated with other APIs or services to provide a more diverse set of information.


# AJAX Review

Here's an example of how you can use the Numbers API ([http://numbersapi.com/](http://numbersapi.com/)) to retrieve data about a specific number:

1.  Create a function called `getNumberInfo()` that takes a number as an argument and makes a GET request to the Numbers API using the `fetch()` method.



```js
function getNumberInfo(number) {
	const API_URL = `http://numbersapi.com/${number}`;
	fetch(API_URL).then(response => response.text()).then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});
}
```


In this example, the `getNumberInfo()` function takes a number as an argument, which is passed to the API URL. The `fetch()` method is used to make a GET request to the API, and the returned data is in plain text format, so we use the `text()` method to parse the data. The parsed data is then logged to the console.

2.  Call the `getNumberInfo()` function with a number of your choice, for example:



```js
getNumberInfo(42);
```


It will return a text with information about the number 42.

3.  If you want to retrieve the data in a specific format, you can add the format type to the API endpoint, for example:



```js
function getNumberInfo(number, format) {
	const API_URL = `http://numbersapi.com/${number}/${format}`;
	fetch(API_URL).then(response => response.text()).then(data => {
		console.log(data);
	}).catch(error => {
		console.log(error);
	});
}
getNumberInfo(42, 'trivia');
```


This example retrieves data about number 42 in trivia format.

You can also add a frontend to display the information returned by the API on the page, for example by creating a div element in the HTML file and updating the innerHTML of that element with the data returned by the API.

Keep in mind that the numbers API is a free service, you may reach the rate limit if you're making too many requests in a short period of time.




# Labwork: GPT-4 Chatbot 😅
## Backend And Server-To-Server Communication
Here's a tutorial on how to use the Numbers API ([http://numbersapi.com/](http://numbersapi.com/)) to build a simple chatbot:

1.  Create a new Node.js project and install the `express` package. This packages will be used to create the chatbot's server and handle incoming requests.



```
npm init 
npm install express
```


2.  Create a new file called `index.js` and import the necessary modules.



```js
const express = require('express');

```


3.  Create a new Express app and configure it to use the `body-parser` middleware.



```js
const app = express(); 
app.use(express.json()); // read JSON BODY
app.use(express.urlencoded({ extended: true })); // read URL encoded body
```


4.  Create a new route that will handle incoming requests to the chatbot.



```js
app.post('/chatbot', (req, res) => {
	// Handle incoming request 
});
```



5.  In the route's callback function, extract the user's message from the request's body.



```js
app.post('/chatbot', (req, res) => {
	const message = req.body.message;
	// Process message and get response
});
```


6.  Use a regular expression or string manipulation methods to extract a number from the user's message, if any.



```js
app.post('/chatbot', (req, res) => {
	const message = req.body.message;
	const number = message.match(/\d+/);
	// Process message and get response
});
```


7.  If a number is found in the message, make a GET request to the Numbers API to retrieve information about that number. The API accepts a `number` parameter, and a `type` parameter that specifies the format of the response (e.g., `trivia`, `math`, `date`, `year`).



```js
app.post('/chatbot', (req, res) => {
	const message = req.body.message;
	const number = message.match(/\d+/);
	if (number) {
		fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
			res.json({
				text: data
			});
		}).catch(error => {
			res.json({
				text: "Sorry, I couldn't find any information about that number."
			});
		});
	}
});
```



8.  If no number is found in the message, return an appropriate response.



```js
app.post('/chatbot', (req, res) => {
	const message = req.body.message;
	const number = message.match(/\d+/);
	if (number) {
		fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
			res.json({
				text: data
			});
		}).catch(error => {
			res.json({
				text: "Sorry, I couldn't find any information about that number."
			});
		});
	} else {
		res.json({
			text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
		});
	}
});
```


9.  Start the server by calling `app.listen()` and specify a port for the server to listen on.



```js
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
```


10.  Test the chatbot by sending a POST request to the `/chatbot` endpoint with a message containing a number. You can use a tool like `Postman` to test the API or you can use a frontend library like `React` or `Angular` to create a simple user interface to interact with the API.

## Frontend in jQuery
Sure! Here's a tutorial on how to build a frontend in jQuery for the chatbot backend that uses the Numbers API ([http://numbersapi.com/](http://numbersapi.com/)):

1.  Create an HTML file with a form that contains an input field for the user to enter a message and a submit button.



```html
<form id="chatbot-form">
  <label>Enter a message:</label>
  <input type="text" id="chatbot-input">
  <button type="submit">Submit</button>
</form>
```


2.  Include the jQuery library in the HTML file.



```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```


3.  In a separate JavaScript file, add an event listener to the form that listens for a submit event.



```js
$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		// Handle form submission  
	});
});
```


4.  Inside the event listener, get the value of the input field and send a POST request to the chatbot backend using the `$.ajax()` method.



```js
$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		const message = $('#chatbot-input').val();
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/chatbot',
			data: {
				message: message
			},
			success: function(response) { // Handle response       
			}
		});
	});
});
```



5.  Inside the `success` callback function, display the response text in a div element.



```js
$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
		event.preventDefault();
		const message = $('#chatbot-input').val();
		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/chatbot',
			data: {
				message: message
			},
			success: function(response) {
				$('#chatbot-response').text(response.text);
			}
		});
	});
});
```


6.  Add a div element to the HTML file to display the response text



```js
<form id="chatbot-form">
  <label>Enter a message:</label>
  <input type="text" id="chatbot-input">
  <button type="submit">Submit</button>
</form>
<div id="chatbot-response"></div>
```


7.  Make sure that your backend is running on the specified port (3000 in this example), then you can open the HTML file in your browser to test the chatbot frontend.

You can further improve this example by adding more features, for instance, the ability to handle multiple responses, or to show the user's message along with the chatbot's response.

Please keep in mind that the example assumes that the backend is running on `http://localhost:3000/`, you'll need to change the url to match the url of your backend if it's running on a different host or port.

## Display Chat History
Here's an example of how you can use jQuery to append the response from the chatbot backend to a chat history div in the web page, and also add buttons to remove old responses:

1.  In your HTML file, add a div element with an id of "chat-history" to hold the chat history.



```html
<div id="chat-history"></div>
```


2.  In the success callback function of the jQuery AJAX call, use the `append()` method to add the chatbot's response text and a remove button to the chat history div.



```js
success: function(response) {
	let newMessage = $('<div>', {
		class: 'message'
	}).text(response.text);
	let removeButton = $('<button>', {
		class: 'remove-button'
	}).text('Remove');
	newMessage.append(removeButton);
	$('#chat-history').append(newMessage);
}
```


3.  Add a click event listener to the remove buttons that use the `remove()` method to remove the corresponding message div from the chat history.



```js
$(document).on('click', '.remove-button', function() {
	$(this).parent().remove();
});
```


4.  Style the message divs and remove buttons using CSS to make the chat history look more polished.



```css
.message {
  background-color: #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
}
.remove-button {
  float: right;
  background-color: #ff0000;
  color: #ffffff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

```


5.  Finally, you can also add a scrollbar to the chat-history div to make it more user-friendly.



```css
#chat-history {
  height: 300px;
  overflow-y: auto;
}

```


This is a simple example of how you can use jQuery to append the response from the chatbot backend to a chat history div in the web page, and also add buttons to remove old responses. You can further improve this example by adding more features, for instance, the ability to handle multiple responses, or to show the user's message along with the chatbot's response.


# Challenge 1 - Host The Backend On Render.Com
Here's a general overview of how you can host the backend code for the chatbot on Render.com:

Create an account on Render.com and create a new Web Service.

Connect your GitHub, GitLab, or Bitbucket account to Render and select the repository containing your backend code.

Set the build command for the service. For example, if you are using Node.js, the command would be npm install and the start command would be node index.js.

Configure environment variables if needed (for example, if your app needs a database, you will need to set the database connection string as an environment variable)

Deploy the service. Render will automatically build and deploy your code, and it will also provide you with a public URL where your service can be accessed.

Test your service by making a request to the public URL provided by Render.

If you want to update the code, just push the changes to your repository and Render will automatically rebuild and redeploy the service.




# Challenge 2 - Host The Frontend On Netlify.Com
To host the frontend code for the chatbot on Netlify, you will need to create an account and connect your repository containing the frontend code. Then you will need to set the build command, the PUBLIC_URL environment variable and deploy the site. Netlify will provide a public URL for the site. To connect the frontend to the backend, you will need to set the backend's url as an environment variable and use it in your frontend code to make requests to the backend. 