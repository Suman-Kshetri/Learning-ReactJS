import { useCallback, useEffect, useState , MouseEvent, KeyboardEvent, useMemo, useRef} from 'react'
import './App.css'

interface User {
  id:number,
  username: string,
}

type fibFunc = (n :number) => number;

//recursion
const fib: fibFunc = (n) => {
  if(n<2) return n
  return fib(n-1) + fib(n-2);
}

const myNum:number = 37;


function App() {
  const [count, setCount] = useState<number> (0)
  const [users, setUsers] = useState<User [] | null> (null)



  useEffect(() => {
    console.log('mouting')
    console.log('Users: ', users)

    return () => console.log('unmounting')

  }, [users])


  //use callback will memoized the function so it not always recreated.

  const addTwo = useCallback((e: MouseEvent<HTMLButtonElement> | KeyboardEvent <HTMLButtonElement>): void => setCount(prev => prev+2), []);

  //use memo is used to hold the value until it is used

  const result = useMemo<number>(() => fib(myNum),[myNum])


  const [text, setText] = useState<string>('')
  const [seconds , setSeconds] = useState<number>(0);
  const render = useRef<number>(0);
  const timerId = useRef<number>(0);

  const handleChange = (e:any) => {
    setText(e.target.value);
    render.current++;
  }

  //useref
  const startTimer = () => {
    timerId.current = setInterval(() => {
      render.current++;
      setSeconds(prev => prev+1);
    }, 1000);
  }
  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  }
  const resetTimer = () => {
    stopTimer();
    if(seconds)
    {
      render.current ++ ;
      setSeconds(0)
    }
  }
  
  

  


  return (
    <>
      <h1>hello</h1>
      <h2>count is {count}</h2>
      <button onClick={addTwo}>Click me</button>
      <h2>{result}</h2>
      <div>
      <input 
      type="text"
      value={text}
      onChange={handleChange}
        />
      <p>Render: {render.current}</p>
      <br/><br/>
      <div className='buttons'>
      <button onClick={startTimer} >Start</button>
      <button onClick={stopTimer} >Stop</button>
      <button onClick={resetTimer} >Reset</button>

      </div>
      <p>Seconds: {seconds}</p>
      </div>
    </>
  )
}

export default App
