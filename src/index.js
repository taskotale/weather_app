import getWeatherData from "./getWeather"
import getGif from "./getGif"


const img = document.createElement('img')
document.body.appendChild(img)

getWeatherData().then(function (response) {
    console.log(response)
    getGif('weather '+response).then(function(response) {
        img.src = response
    })
})
