import { useState } from "react"

function App() {
 const [bgColor, setBgColor] = useState("olive")
  return (
    <>
     <div className="w-full h-screen duration-200 "
     style={{backgroundColor: bgColor}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg text-white"
           style = {{backgroundColor: "red"}}
           onClick={() => setBgColor("red")}
           >Red</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg text-white"
           style = {{backgroundColor: "green"}}
           onClick={() => setBgColor("green")}
           //we are giving callback function to onClick event because if we give setBgColor then we cannot give parameter to setBgColor function
           //but we need to give parameter to setBgColor function to change the color of background
           >Green</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg text-white"
           style = {{backgroundColor: "blue"}}
           onClick={() => setBgColor("blue")}
           >Blue</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg text-white"
           style = {{backgroundColor: "#3c3c3c"}}
           onClick={() => setBgColor("#3c3c3c")}
           >Dark</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg "
           style = {{backgroundColor: "white"}}
           onClick={() => setBgColor("white")}
           >White</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg "
           style = {{backgroundColor: "yellow"}}
           onClick={() => setBgColor("yellow")}
           >Yellow</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg text-white"
           style = {{backgroundColor: "black"}}
           onClick={() => setBgColor("black")}
           >Black</button>
           <button 
           className="outline-none px-4 py-1 rounded-xl shadow-lg"
           style = {{backgroundColor: "aqua"}}
          onClick={() => setBgColor("aqua")}
           >Aqua</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
