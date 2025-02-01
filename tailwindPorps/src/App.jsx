import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'suman',
    age: 19
  }
  let newArray = [1,2,3,4,5]
  return (
    <>
      <h1 className = 'bg-green-400 text-black rounded-xl p-2 mb-4'>Tailwind css and Props</h1>
      {/* <Card name = 'suman' someObject = {newArray}/> */}
      <Card title = 'Software Engineer' username = 'Suman Kshetri'/>
      <Card title = 'Game Developer' username = 'Dreamer'/>
      <Card/>
    </>
  )
}

export default App
