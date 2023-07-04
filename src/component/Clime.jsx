import { useState } from "react";


const Clime = ( {goodDay} )=> {

    const [degree, setDegree]= useState(true) 
    const icon=`/${goodDay.weather?.[0].icon}.svg`
    const tempe=degree?`${Math.ceil( goodDay.main?.temp -273.15)}°C`
    :`${Math.ceil(( goodDay.main?.temp -273.15)*1.8+32)}°F`
    const termica=degree?`Sensación Térmica: ${Math.ceil( goodDay.main?.feels_like -273.15)}°C`
    :`Sensación_Termica: ${Math.ceil( (goodDay.main?.feels_like -273.15)*1.8+32)}°F`
    const spd=degree?`${Math.ceil( goodDay.main?.speed??0)} m/s`:null;
    const press=degree?`${Math.ceil( goodDay.main?.pressure??0)} hPa`:null;
  

    function change(){
        setDegree(!degree)
    }
    
        return (
        <div className="div">
           
            <div className="weather">
            <p className="temp">{tempe}</p>
            <img className="imagen" src={icon} alt="" />
            <p className="sensation">{termica}</p>
            <p className="speed">{spd}</p>
            <p className="pressure">{press}</p>
            
               <div className="location">
                  <p>📌 {goodDay.name}- {goodDay.sys?.country}</p>
                </div>
                                
            </div>
            <br/>
            <button className='temperature' onClick={change}>Cambiar a °F</button>
         </div>
        )
}

export default Clime;
