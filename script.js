const apiKey = "API-KEY"
const inputBox = document.getElementById("inputBox");
const inputButton = document.getElementById('inputButton');
const resultContainer = document.getElementById('weather-box');

inputButton.addEventListener('click', async() => {
    const city = inputBox.value.trim();

    if(city === ""){
        resultContainer.innerHTML = `<p>Please enter a city name.</p>`
        alert('Please enter a city')
        return;
    }

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

        if(!response.ok){
            throw new Error("City not found")
        }
        const data = await response.json()

        displayWeather(data);
        console.log(data)

    } catch (error){
        resultContainer.innerHTML = `<p>Try Again</p>`
    }
})

function displayWeather(data){
    const {name , main , weather} = data

    resultContainer.innerHTML = `
    <h2>${name}</h2>
    <p>Tempature: ${main.temp} C</p>
    <p>Weather: ${weather[0].description}</p>
    <p>Humidity: ${main.humidity}%</p>
    `
}

