
import './App.css'
import Counter from './Counter'
import { CounterProvider } from './context/CounterContext'
import { intialState } from './context/CounterContext'

function App() {

  return (
    <>
    <CounterProvider count = {intialState.count} text = {intialState.text}>
      
      <Counter>{(num: number) => <>Current count: {num}</>}</Counter>
    </CounterProvider>
    </>
  )
}

export default App
