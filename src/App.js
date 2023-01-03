import React from 'react'
import './styles.css'
import data from './WeatherData.js'
import WeatherForecast from './WeatherForecast'

  function App() {
    return (
      <div className="App">
        <br></br>
        <h1>My WeatherIcons App</h1>
        <div className='center' />
          {data.map((item) => (
            <WeatherForecast data={item} />
          ))}
      </div>
    )
  }


export default App;
