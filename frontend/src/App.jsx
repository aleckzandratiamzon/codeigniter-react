import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import Sample from './Sample'

function App() {

  const [error, setError] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('')

  const apiKey = "bcf877bb8dd4d3d39dce5b5419a5e0e8";

  const handleSearch = async ()=>{
    if (city.trim == ''){
      setError("try again")
      return;
    }
    try {
      const response =await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      setWeatherData(response.data);
      console.log(response.data)
    } catch (error) {
      setError(error.message)
      
    }
    
  }

  const handleChange = (e)=>{
    setCity(e.target.value)
  }
  return (
    <>

    <div className="vw-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
            <div className="input-group rounded mb-3">
              <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" onChange={handleChange} value={city}/>
              <button type='submit' onClick={handleSearch} className="input-group-text border-0 fw-bold">Check!</button>
            </div>
            {weatherData &&(
              <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="mb-1 sfw-normal">{weatherData.name}, {weatherData.sys.country}</h4>
                <p className="mb-2">Current temperature: <strong>{weatherData.main.temp}°C</strong></p>
                <p>Feels like: <strong>{weatherData.main.feels_like}°C</strong></p>
                <p>Max: <strong>{weatherData.main.temp_max}°C</strong>, Min: <strong>{weatherData.main.temp_min}°C</strong></p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">{weatherData.weather[0].main}: <strong className='text-capitalize'>{weatherData.weather[0].description} </strong></p>
                  <i className="fas fa-cloud fa-3x" style={{color: '#eee'}} />
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
