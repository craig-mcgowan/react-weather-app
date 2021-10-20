import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./WeatherForecast"
console.log(weatherData)
export default function App() {
  const forecasts = weatherData.map((forecast, index) => (
    <WeatherForecast {...forecast} key={index}/>
  ))
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>
        {forecasts} 
      </section>
      

    </div>
  );
}
