import React from 'react';
import { Button } from 'react-bootstrap';



const WeatherBox = ({weather}) => {
  console.log("weather", weather)
  return (
    <div className='weather-box'>
      <h2>{weather?.name}</h2>
      <p>{weather && weather.main.temp}°C /{weather && (weather.main.temp*9/5)+32}°F </p>
      <p>min: {weather && weather.main.temp_min}, max:{weather && weather.main.temp_max}</p>
      <p>{weather?.weather[0].description} </p>
      <p>Humidity: {weather?.main.humidity}</p>
    </div>
  )
}



export default WeatherBox
