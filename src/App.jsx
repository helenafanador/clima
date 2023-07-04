import { useEffect, useState } from 'react'
import axios from 'axios'
import Clime from './component/clime'


function App() {
  const [search, setSearch]=useState ('')
  const [value,setValues]= useState('')
  const [icon,setIcon]= useState('')
  const appKey= 'https://api.openweathermap.org/data/2.5/weather?lat=-34.59795061499785&lon=-58.49751949312848&appid=d5dc6140fd1f0d48cabfc23ecd826105'
  const [today,setToday]= useState({})

  const [isDay, setIsDay]=useState(true)
  function day(){
    setIsDay(!isDay)
  }
  const background=isDay?"/dia.jpg":"/noche.jpg"
  document.body.style=`background-image:${background};
  background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        transition: 500ms;`
  
useEffect(() =>{
axios
.get(appKey)
.then((resp) =>{
   setToday(resp.data)
})
.catch((error) =>{
    console.log (error)
})
  },[])
//console.log(today)


  return (
    <>
    <div className='cont'>
    <button className='cont__OnOff' onClick={day}> ☀-🌑</button>
    </div>
    <h1 className='title'>Weather App</h1>
    <div className='search-data'>
      <input 
      type='text'
      className='search-all'
      placeholder='search...'/>
    </div>
   
     <Clime goodDay={today}/>
    
         </>
  )
}

export default App

