import React from 'react'
import { WiDayHail,WiSnow } from "react-icons/wi";
import Clock from 'react-clock';
import { useState,useEffect } from 'react';
import 'react-clock/dist/Clock.css';

const Card = ({weather}) => {
  console.log(weather);

  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);//current data and time

    return () => {
      clearInterval(interval);
    };
  }, []);

  if(JSON.stringify(weather) !=='{}'){
    return (
      <div className='d-flex flex-column align-items-center mt-3 gap-3'>
      <Clock value={value} />
         <h2>{weather.name}, {weather.sys.country}</h2>
         <h1><img src= {`https://openweathermap.org//img/w/${weather.weather[0].icon}.png`}/>{weather.main.temp}'C</h1>
         <p>{weather.weather[0].main}</p>
         <p>humidity:{weather.main.humidity}</p>
         <p>Visibility:{weather.visibility}</p>
       </div>

  )
}
}

export default Card
