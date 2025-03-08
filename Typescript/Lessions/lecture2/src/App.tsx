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

  //useref

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);
  
  


  return (
    <>
      <h1>hello</h1>
      <h2>count is {count}</h2>
      <button onClick={addTwo}>Click me</button>
      <h2>{result}</h2>
      <input type="text"  ref = {inputRef}/>
    </>
  )
}

export default App
