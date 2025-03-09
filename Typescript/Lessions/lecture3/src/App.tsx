
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <>
      <Counter>{(num: number) => <>Current count: {num}</>}</Counter>
    </>
  )
}

export default App
