import { useState } from 'react'
import React from 'react'

const Content = () => {
    const [fullName , setName] = useState('Suman');{/*fullName is the current state and setName is the setter[set the state with it]*/}
  const name = "suman";
{/*reandom name from an array*/}
      const handleFullName = () =>{
        const name = [
          "suman","rohan","subash","santosh","rakesh","parker"
        ];
        const int = Math.floor(Math.random() *7);{/*number between 0 and 2*/}
        // return name[int];  
        setName(name[int]);//to change the name when it is called then current state is changed
      }
      const handleClick = () => {
        console.log("You clicked it");
      }
      const handleClick2 = (name) => {
        console.log(`${name} you clicked a button`);
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText); 
      }
  return (
    <main>
         <p onDoubleClick={handleClick}>Hello {name}</p>
         <p>Usin the use state hook</p>
         <p>Hello {fullName}</p>
      {/* this will be rendered as the html */}  
      <p>[1,2,3,4]</p>
      {/* but if we use the {} then array will be rendered in the screen as js string and this is the js expression*/}
      <p>{[1,2,3,5]}</p>
      <p>{name}</p> 
      {/* object and boolean cannot be rendered */}
      <p>{2 === 3}</p>
      <button onClick={handleFullName}>Change</button>
        {/* <p>Hello {handleFullName()}</p> */}
        <button onClick={handleClick}>Click Me</button>
        <button onClick={() => {handleClick2('Suman')}}>Click</button>
        <button onClick={(e) => {handleClick3(e)}}>Click Button</button>
    </main>
    

  )
}

export default Content