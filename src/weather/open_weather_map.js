const WEATHER_API_KEY = "99ce406d8f9e48e966ecf89dfb045099";
const API_STEM = "https://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
    return `${API_STEM}q=${zip}&units=metric&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast (zip) {
    return fetch(zipUrl(zip))
        .then((response) => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(()=> console.log("Error"));
}

export default { fetchForecast: fetchForecast };