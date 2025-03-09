import { ReactNode,} from 'react'
import { useCounter } from './context/CounterContext'
import { usecCounterText } from './context/CounterContext'

type ChildrenType = {
    children: (num: number) => ReactNode;
  }


const Counter = ({children}:ChildrenType) => {
    // const [count, setCount] = useState<number>(1)
    const {count, increment,decrement} = useCounter(); 
    const {text, handleTextInput} = usecCounterText();
  return (
    <>
    <h1>{children(count)}</h1>
    <div className='Btn'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
        <br/><br/>
    <input type="text" onChange={handleTextInput} />
    <h2>{text}</h2>
    </>
  )
}

export default Counter
  
  