import ReactDOM from 'react-dom'
import React from 'react'
import WeatherWidgetContainer from './containers/WeatherWidgetContainer'

import './static/css/weather-icons.css';
import './static/css/site.css';


let App = document.getElementById("app");

ReactDOM.render(<WeatherWidgetContainer />, App);