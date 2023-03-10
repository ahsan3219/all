import axios from 'axios';
import './styles.css'
import { useState, useEffect } from "react";
// import axios from "axios";
function Weather() {

    const [cityName, setCityName] = useState('')
    const [weather, setWeather] = useState({})
  
  
  useEffect(() => {
      const getWeather = () => { // get current weather 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`)
          .then(function (response) {
  
            console.log("data: ", response.data);
            setWeather(response.data)
  
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
      }
      getWeather();
    }, [])
    const getWeather = (e) => {
      e.preventDefault();
      console.log("CityName", cityName)
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2baadce54194fdee21bed0ae9b7ab7a4&units=metric`)
        .then(function (response) {
  
          console.log("data: ", response.data);
  console.log("icon",response.data.weather[0].icon);
  let icon="http:openweathermap.org/img/wn/"+response.data.weather[0].icon+"@2x.png"
          setWeather(response.data)
  
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
  
  
  
  
  
  
  
  
    return (
      <div className="mi">    <center>
        <h1>Weather App</h1>
  
        <div className="App">
  
  
          <br />
          <form onSubmit={getWeather}>
  
  
            City Name :<input
              type="text" 
              placeholder='Enter City Name'
              onChange={(e) => {
                setCityName(e.target.value
                )
              }} />
  
  
  
  
  
  
            <button type='submit'>Get Weather</button>
  
          </form>
        </div>
        <br />
        <br />
  


  
        <center>
          <div className='abc'>{(weather?.name) ?
            <div className='b'>
              <div style={{ margin: 15 }}>City Name : <h1>{weather.name}</h1></div>
              <img src="{http://openweathermap.org/img/wn/10d@2x.png}" alt="icon" />
              <div style={{ margin: 15 }}>Temp : <h1>{weather.main.temp} ??C</h1></div>
              <div style={{ margin: 15 }}>Humidity <h1>{weather.main.humidity}</h1> </div>
  
              <div style={{ margin: 15 }}>Wind Speed: <h1>{weather.wind.speed}</h1></div>
              <div style={{ margin: 15 }}>Max and Min <center><h1>{weather.main.temp_max}??C - {weather.main.temp_min}??C</h1></center> </div>
            </div>
            : null
          }</div></center>
      </center>
  
      </div>)
    


        // {/* {data.map((eachProduct, index) => {

            // return <div key={index} className='product'>
            //     <h2>{eachProduct?.name}</h2>
            //     <span>{eachProduct?.category}</span>
            //     <span>{eachProduct?.price}</span>
            //     <p>{eachProduct?.description}</p>
            // </div>

        // })} */}


   
//     return(

//             <div className="container">

// <h1>I am Weather Page</h1>

// </div>)
}
export default Weather;