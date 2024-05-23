import { useState } from 'react'
import './App.css'
import {getRestData} from './api.js'

const handleButton = async(setData) => {
  const url = "http://192.168.9.34:9090/status/weighing_status?scanStatus=ok&minVal=20.33&maxVal=2044.54&premixName=A";
  const apiData = await getRestData(url); 
  console.log(Object.values(apiData)[0]);
  setData(Object.values(apiData)[0]);
}


function App() {
  const [data, setData] = useState();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => handleButton(setData)}>Click here!!</button>
        {data && <h3>
          {data} is fetched from API
        </h3>}

      </div>
    </>
  )
}

export default App
