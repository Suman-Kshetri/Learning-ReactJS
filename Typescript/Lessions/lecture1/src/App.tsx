import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import { useState } from 'react'
import List from './components/List'

function App() {
  const [counter, setCounter] = useState<number>(1)
  return (
    <>
      <h1>
        hello world
      </h1>
      <Heading title= {"hello world"} />
      <Section title={"section"}>
        <p>This is my section</p>
        <Counter setCounter = {setCounter}>
        Count is: {counter}</Counter>
        <List items= {["☕ Coffee", "🌮 Tacos", "💻 Code"]}  render = {(item: string) => <span className = 'gold bold' >{item} </span> }></List>
      </Section>
    </>
  )
}

export default App
