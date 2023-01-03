import React from 'react'
import './styles.css'

function WeatherForecast(props) {
  const item = props.data
  console.log('weather data', props)

  return (
    <>
      <div className="weather-container">
        <div>
          <img src={item.img} alt={item.title} />
          <p>Conditions:{item.conditions}</p>
          <p>Time:{item.time}</p>
        </div>
      </div>
    </>
  )
}

export default WeatherForecast
