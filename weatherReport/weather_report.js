function showweatherDetails(event) {
    event.preventDefault();

    // const city = document.getElementById('city').value;
    const apiKey = 'a977262edd1fbda463250a12f386f66a';
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`

    // console.log(apiUrl);
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>
                              <p>Wind Speed: ${data.wind.speed} meters per second (m/s)</p>`;
    })

    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
      });

}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
