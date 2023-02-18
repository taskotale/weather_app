import getWeatherData from "./getWeather"
import getGif from "./getGif"


const img = document.createElement('img')
const textToShow = document.createElement('h1')
document.body.appendChild(img)
document.body.appendChild(textToShow)

getWeatherData(40.785091, -73.968285).then(function (response) {
    getGif(response).then(function (response) {
        img.src = response
    })
})

const successCallback = (position) => {
    getWeatherData(position.coords.latitude, position.coords.longitude).then(function (response) {
        getGif(response).then(function (response) {
            img.src = response
        })
    })
};

const errorCallback = (error) => {
    console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
