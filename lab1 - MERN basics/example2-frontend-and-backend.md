Here is an example of how you can write JavaScript code to get the weather of a city using the OpenWeatherMap API, an HTML frontend form, and an Express.js route:

```js
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;



// This is the API endpoint for the OpenWeatherMap API
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

// This is the API key for the OpenWeatherMap API
// You will need to sign up for a free API key at https://home.openweathermap.org/users/sign_up
const API_KEY = 'b660f3402c54cb9a9c48f89c35249e5c';

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/weather" method="POST">
      <label>
        City:
        <input type="text" name="city" />
      </label>
      <button type="submit">Get Weather</button>
    </form>

    <div>Temperature: <span id="temperature"></span></div>
  `);
});
function x(response) { return response.data }

app.post('/weather', (req, res) => {
  // console.log(req.body);
  // Get the city name from the form input
  const city = req.body.city;

  // Make a GET request to the OpenWeatherMap API
  axios.get(`${API_ENDPOINT}?q=${city}&appid=${API_KEY}`)
    .then(response = > response.data)
    .then(data => {
      console.log(data);
      // The API returns the weather data in the "main" object
      const weather = data.main;

      // Send the temperature back to the client
      res.send(`The temperature in ${city} is ${weather.temp}`);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

This code sets up an Express.js server with two routes: a GET route that serves the HTML form, and a POST route that handles the form submission. When the user submits the form, the POST route is called, which gets the city name from the form input and makes a GET request to the OpenWeatherMap API using the **`fetch()`** function. The API returns the weather data as a JSON object, which is then used to send the temperature back to the client.

You will need to install the express and node-fetch packages to run this code. You can do this by running the following command:

```js
npm install express node-fetch
```