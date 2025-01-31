import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'


// function App() {
//   return (
//     <h1>Hello World</h1>
//   )
// }

//this code doesnot work since it is our custom implementation of react and 
// the actual react code is expects the certain structure of the react element
// const reactElement = {
//   type : 'p',
//   props: {
//       href: 'http://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to go to google',
// }

const anotherElement = (
  <a href='http://google.com' target='_blank'>Click me to go to google</a>
)

const anotherUser = '_billy';
//creating using react syntax
const reactElement = React.createElement(
  'a',
  {
    //proprieties
    href: 'https://www.youtube.com',
    target: '_blank'
  },
  //children
  'Click me to go to youtube',
  anotherUser
)

// injecting the App component into the root element of the HTML document
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  //   <Test />
  // </StrictMode>
  // anotherElement
  reactElement  
)
