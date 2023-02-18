export default async function getWeatherData(lat, lon) {

    try {
        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=66f249ad58eecb093bf9f12e57152985&units=imperial`,
            { mode: 'cors' })
        const weatherData = await weather.json()
        const description = weatherData.weather[0].description
        const temp = weatherData.main.temp
        const locationName = document.querySelector('h1')
        locationName.textContent = `${weatherData.name} - ${description} - ${temp.toFixed(0)}F`

        return 'sky weather ' + description
    } catch (error) {
        console.error('Error:', error);
        alert('something went wrong, try refreshing page');
    }
}

