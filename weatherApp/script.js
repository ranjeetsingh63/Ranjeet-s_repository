document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.querySelector('#city-input');
    const getWeatherBtn = document.querySelector('#btn');
    const weatherInfo = document.querySelector('.screen');
    const errorMessage = document.querySelector('#error-message');
    const image = document.querySelector('.img')
    const API_KEY = "ec8204c5790e7e564398089cf2c01685";

    getWeatherBtn.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if(!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayData(weatherData);
        } catch (error) {
            showError();
        }
        //call get func
        //call display func
        //if the input is wrong display error
    })

    async function fetchWeatherData(city){
        // Get data
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        console.log(typeof response);
        console.log("Response", response);
        if(!response.ok){
            throw new error('City Not found')
        }
        const data = await response.json();
        return data;
    }

    function displayData(data){
        console.log(data);
        const {name, main, weather} = data
        image.classList.add('hidden')
        document.querySelector('p').innerHTML= `
        <div class="info-container">
             <span class="dis-name">${name}</span>
             <span class="dis-temp">Tempareture: ${main.temp}.c</span>
             <span class="dis-weather">Weather: ${weather[0].discripion}</span>
         </div>`
     
        //will diaplay the weather info onto the screen
    }

    function showError(){
        weatherInfo.classList.remove('hidden');
        errorMessage.classList.add('hidden');
    }
})