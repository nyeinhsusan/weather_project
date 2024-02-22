import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Card from './components/Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {api,api_key} from "./api/apiResource";
const App = () => {

  const [weather,setWeather] = useState({});
  const [country,setCountry] = useState("Yangon")
  const fetchWeather = async(country_name)=>{
    console.log(country_name);
   // const res = await api.get(`/weather?q=Yangon&appid=${api_key}`)
   //for useState country
   if(country_name !== undefined){
    setCountry(country_name);
   }
   
 
try{
  const res = await api.get(`/weather?q=${country}&appid=${api_key}`)
setWeather(res.data);
console.log(weather);
}
catch(error){
console.log("Error.....");
}


  }
  useEffect(()=>{
    fetchWeather();
    console.log(weather);
  },[country])
  return (
    <div className='w-full min-vh-100 d-flex justify-content-center align-items-center'> 
<div className='shadow-lg bg-light gap-4'>
{/* <h1 className='text-center mt-3'>Weather App</h1> */}
<Form fetchWeather={fetchWeather}/>
<Card weather={weather}/>

</div>
    </div>

    

  )
}

export default App
