import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+-={}[];:'<>,.?/";

    for(let i=1; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  },
  [length, numberAllowed, charAllowed,setPassword]
)
 useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(()=> {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 9); // only 9 is slected
    // window.navigator.clipboard.writeText(password); // this can aslo be used but not in server since server doesn't have window and effect of copied cannot be seen
  }, [password])
  //useRef hook'
  const passwordRef = useRef(null);
  return (
    <>
     
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-orange-500 bg-gray-600" >
      <h1 className="text-2xl text-center font-bold text-white my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 gap-2">
        <input 
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly
        ref={passwordRef}
         />
         <button
         onClick={copyPasswordToClipboard}
         className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg"
         >Copy</button>
      </div>
      <div className="flex text-sm gap-x-4 font-medium text-white">
        <div className="flex items-center gap-2">
          <input 
          type="range"
          min = {8}
          max = {100}
          value={length}
          onChange = {(e) => {setLength(e.target.value)}}
          className="cursor-pointer"
           />
           <label className="text-md">Length: {length}</label>
        </div>
        <div className="flex items-center gap-2">
          <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev ) => !prev);}
          }
          />
          <label htmlFor="numberInput" className="text-md">Numbers</label>
        </div>
        <div className="flex items-center gap-2">
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={() => {
            setCharAllowed((prev
              ) => !prev);}
            }
              />
              <label htmlFor="charInput" className="text-md">Characters</label>
           </div>
      </div>

     </div>
    </>
  )
}

export default App
