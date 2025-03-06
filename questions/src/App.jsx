import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value , setValue] =  useState(1);
  // const [multipliedValue , setMultipliedValue] = useState(1);
  const multipliedValue = value * 5;
  const multipliedByFive = () => {
    // setMultipliedValue(value * 5)
    setValue(value + 1)
  }
  return (
    <>
      <h1>Main Value: {value} </h1>
      <button
      onClick={multipliedByFive}
      >click to multiply by 5</button>
      <h1>Multiplied Value: {multipliedValue} </h1>
    </>
  )
}

export default App
