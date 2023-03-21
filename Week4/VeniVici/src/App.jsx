import React, {useState, useEffect} from 'react'
import LeftBlock from './components/LeftBlock'
import CenterBlock from './components/CenterBlock'
import RightBlock from './components/RightBlock'
import {getNasaData} from './utils/nasaAPI'
import './App.scss'
function App() {
  const [data, setData] = useState(null)
  const retrieveData = () => {
    getNasaData().then((data) => {
      //console.log(data)
      setData(data)
      console.log("Parent",data)
      console.log("Parent",data[0])
      console.log("Parent",data[0].url)
    })
  }
  return (
    <div className="App">
      <LeftBlock/>
      <CenterBlock handleOnClick={retrieveData} data={data}/>
      <RightBlock/>
    </div>
  )
}

export default App
