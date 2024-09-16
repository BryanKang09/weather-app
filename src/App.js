import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/Weather_box';
import WeatherButton from './component/Weather_button';
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const API_key = `2991855510e7f71fe57b0500e437392c`
  const cities = ['paris','auckland','seoul','tokyo','new york','sydney']
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat,lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setWeather(data); 
  }  
 
  const getWeatherByCity = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);
    setWeather( data)
  }

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  }

  useEffect (()=>{
    if (city==""){
      getCurrentLocation();      
    }else{
      getWeatherByCity();
    }    
  },[city]);

  
  return (
    <>
      
      {loading?(
        <div className ="container">
        <ClipLoader color = "#f88c6b" loading={loading} size={150}/>
        </div>
      ):(       
        <div className ="container">
          <WeatherBox weather={weather}/>
          <WeatherButton cities = {cities} setCity={setCity} handleCityChange={handleCityChange} selectedCity={city}/> 
        </div>
      )}
        
    </>
  );
}

export default App;
