import React from 'react';
import { Button } from 'react-bootstrap';


const WeatherButton = ( {cities, setCity, handleCityChange, selectedCity} ) => {
  

  return (
    <div>
      <Button  variant={`${selectedCity == null ? "outline-warning" : "warning"}`} onClick={() => handleCityChange("current") }>Current Location</Button>
     
     
      {cities.map((item, index )=>(
        <Button variant={`${selectedCity == item ? "outline-warning" : "warning"}`} key={index} onClick={()=>setCity(item)} >
          {item}
        </Button>
      ))} 
    </div>
  )
}


export default WeatherButton
