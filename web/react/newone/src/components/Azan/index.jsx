import './styles.css'
import axios from 'axios';
import { useState, useEffect } from "react";
function Azan() {
    
    const [cityName, setCityName] = useState('')
    const [Calander, setCalander] = useState({})
  
  
  useEffect(() => {
      const getWeather = () => { // get current weather 
        axios.get(`http://api.aladhan.com/v1/calendarByAddress?address=karachi`)
          .then(function (response) {
  
            console.log("data: ", response.data);
            setCalander(response.data)
  
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }
      getWeather();
    }, [])
//     const getWeather = (e) => {
//       e.preventDefault();
//       console.log("CityName", cityName)
//       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2baadce54194fdee21bed0ae9b7ab7a4&units=metric`)
//         .then(function (response) {
  
//           console.log("data: ", response.data);
//   console.log("icon",response.data.weather[0].icon);
//   let icon="http:openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png"
//           setCalander(response.data)
  
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })
//     }
  
    
    
    
    
    
    
    
    return(

            <div className="mi">
<center>
        <h1>Namaz Timing</h1>
  <table  border={"2px"}>
    <tr>
        
        <th >English Date</th>
        <th>Hijri Date</th>
        <th>Asr</th>
        <th>Dhuhr</th>
        <th>Fajr</th>
        <th>Isha</th>
        <th>Maghrib</th>
        <th>SunRise</th>
        <th>SunSet</th>

        </tr>
{data.data.list.map((eachItems)=>{
    return<tr>
        
    <th >{eachItems.date.gregorian.date}</th>
    <th>{eachItems.date.hijri.date}</th>
    <th>Asr</th>
    <th>Dhuhr</th>
    <th>Fajr</th>
    <th>Isha</th>
    <th>Maghrib</th>
    <th>SunRise</th>
    <th>SunSet</th>

    </tr>
})}
  </table>
        
</center>
</div>



)}

export default Azan;