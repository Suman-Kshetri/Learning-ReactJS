import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // weget two calues from useState in array format:
  //  0th index is the value and second is the function to update the value
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () => {
    if(counter<20)
    {
    console.log('clicked', counter);
    counter = counter + 1;
    setCounter(counter);
    }
  }
  const removeValue = () => {
    console.log('clicked', counter);
    if(counter>0)
    {
    counter = counter - 1;
    setCounter(counter);
  }
}
  //when remove is used then the counter value should not be negative

  return (
    <>
      <h1>ReactJS</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value: {counter}</button> 
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value: { counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
// the hooks came into action when we need to update many things with the click 
// of one button in ui.