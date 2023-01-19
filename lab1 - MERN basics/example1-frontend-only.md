Here is an example of how you can write JavaScript code to get the weather of a city using the OpenWeatherMap API and an HTML frontend form:

```js
// This is the API endpoint for the OpenWeatherMap API
const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

// This is the API key for the OpenWeatherMap API
// You will need to sign up for a free API key at https://home.openweathermap.org/users/sign_up
const API_KEY = 'your-api-key-goes-here';

// This function is called when the user submits the form
function getWeather() {
  // Get the city name from the form input
  const city = document.getElementById('city').value;

  // Make a GET request to the OpenWeatherMap API
  fetch(`${API_ENDPOINT}?q=${city}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      // The API returns the weather data in the "main" object
      const weather = data.main;

      // Display the temperature in the temperature element
      document.getElementById('temperature').innerHTML = weather.temp;
    });
}
```

This code assumes that you have an HTML form with an input field for the city name and an element to display the temperature. Here is an example of how you can set this up:

```js
<form onsubmit="getWeather(); return false;">
  <label>
    City:
    <input type="text" id="city" />
  </label>
  <button type="submit">Get Weather</button>
</form>

<div>Temperature: <span id="temperature"></span></div>
```
When the user submits the form, the **`getWeather() `** function is called. It gets the city name from the form input and makes a GET request to the OpenWeatherMap API using the **`fetch()`** function. The API returns the weather data as a JSON object, which is then used to display the temperature in the temperature element.