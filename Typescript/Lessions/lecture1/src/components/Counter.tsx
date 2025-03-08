import { ReactNode } from 'react'

type counterProps = {
    setCounter :  React.Dispatch<React.SetStateAction<number>>,
    children : ReactNode;
}

const Counter = ({setCounter, children}: counterProps) => {
    // const [count, setCount] = useState<number |null | undefined>(1)

  return (
    <>
        <h1>{children}</h1>
        <button onClick={() => setCounter(prev => prev + 1)}>CLICK TO INCREASE</button>
        <button onClick={() => setCounter(prev => prev - 1)}>CLICK TO DECREASE</button>
    </>
  )
}

export default Counter
