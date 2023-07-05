import { useState } from "react";


const Clime = ( {goodDay,day} )=> {

    const [degree, setDegree]= useState(true) 
    const icon=`/${goodDay.weather?.[0].icon}.svg`
    const tempe=degree?`${Math.ceil( goodDay.main?.temp -273.15)}°C`
    :`${Math.ceil(( goodDay.main?.temp -273.15)*1.8+32)}°F`
    const termica=degree?`Sensación Térmica: ${Math.ceil( goodDay.main?.feels_like -273.15)}°C`
    :`Sensación Térmica: ${Math.ceil( (goodDay.main?.feels_like -273.15)*1.8+32)}°F`
    const spd=`${Math.ceil( goodDay.wind?.speed??0)} m/s`;
    const press=`${Math.ceil( goodDay.main?.pressure??0)} hPa`;

  const text = degree? "cambiar a °F": "cambiar a °C"

    function change(){
        setDegree(!degree)
    }
    
        return (
        <div className="div">
           
            <div className="weather">
                <div>
                <p className="temp">{tempe}</p>
                <img className="imagen" src={icon} alt="" />
            </div>
            <p className="sensation">{termica}</p>
            <p className="speed">{spd}</p>
            <p className="pressure">{press}</p>
            
               <div className="location">
                  <p>📌 {goodDay.name}- {goodDay.sys?.country}</p>
                </div>
                                
            </div>
            <br/>
            <button className='temperature' onClick={change}>{text}</button>
         </div>
        )
}

export default Clime;
