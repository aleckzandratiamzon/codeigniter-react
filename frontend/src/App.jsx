import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [sampleData, setSampleData] = useState(null)

  useEffect(()=>{
    const fetchSampleData = async () => {
    const response = await axios.get('http://localhost:8080/sample')
    setSampleData(response.data)
    }
    fetchSampleData()
  }, [])

  useEffect(()=>{
    console.log(sampleData)
  }, [sampleData])
  return (
    <>
    <div className="vw-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <h3 className="mb-4 pb-2 fw-normal">Check the weather forecast</h3>
            <div className="input-group rounded mb-3">
              <input type="search" className="form-control rounded" placeholder="City" aria-label="Search" aria-describedby="search-addon" />
              <a href="#!" type="button">
                <span className="input-group-text border-0 fw-bold" id="search-addon">
                  Check!
                </span>
              </a>
            </div>
            <div className="card shadow-0 border">
              <div className="card-body p-4">
                <h4 className="mb-1 sfw-normal">New York, US</h4>
                <p className="mb-2">Current temperature: <strong>5.42°C</strong></p>
                <p>Feels like: <strong>4.37°C</strong></p>
                <p>Max: <strong>6.11°C</strong>, Min: <strong>3.89°C</strong></p>
                <div className="d-flex flex-row align-items-center">
                  <p className="mb-0 me-4">Scattered Clouds</p>
                  <i className="fas fa-cloud fa-3x" style={{color: '#eee'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
