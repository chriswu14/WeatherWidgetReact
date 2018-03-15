const API_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22:city%22)%20and%20u="c"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

export function fetchWeather(city) {
    return fetch(API_URL.replace(/:city/, city))
        .then(res => res.json());
}