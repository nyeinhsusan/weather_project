import React, { useRef, useState } from 'react'

const Form = ({fetchWeather}) => {
  const searchKey = useRef('');
  //const searchOnClick =()=>{
   // console.log(searchKey.current.value);
  
  //}
  return (
    <div className='w-100 d-flex justify-content-center align-center me-3 mt-3' >
    <input type="text" ref={searchKey} className='form-control ms-5' placeholder="Enter Country....."/>
    <input type="button" onClick={()=>fetchWeather(searchKey.current.value)} value="Search" className='me-5 btn text-white bg-dark ms-2'/>
   </div>


  )
}

export default Form
