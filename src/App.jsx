import { useEffect, useState } from 'react'
import axios from 'axios'
import Clime from './component/Clime'


function App() {
  const [search, setSearch]=useState ('')
  const [value,setValues]= useState('')
  const [icon,setIcon]= useState('')
  const [today,setToday]= useState({})

  const [isDay, setIsDay]=useState(true)


  function day(){
    setIsDay(!isDay)
  }
  console.log(isDay)
  const background=isDay?"/dia.jpg":"/noche.jpg"
  document.body.style=`background-image: url(${background});
  background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        transition: 500ms;`
  
useEffect(() =>{

  navigator.geolocation.getCurrentPosition(function(position){
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    const appKey= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d5dc6140fd1f0d48cabfc23ecd826105`

    axios
    .get(appKey)
    .then((resp) =>{
       setToday(resp.data)
    })
    .catch((error) =>{
        console.log (error)
    })
      },function(error){console.log(error)},{ enableHighAccuracy:true})


  },[])



  return (
    <>
    <div className='cont'>
        <button className='cont__OnOff' onClick={day}>🌞🌑</button>
    </div>
    <h1 className='title'>Weather App</h1>
    
   
     <Clime goodDay={today}/>
    
         </>
  )
}

export default App

