async function getWeatherData() {

    const weather = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=66f249ad58eecb093bf9f12e57152985', { mode: 'cors' })
    const weatherData = await weather.json()
    const description = await weatherData.weather[0].description
    console.log('in: ' + description)

    return description

}


getWeatherData().then(function (response) {
    console.log(response)
})
