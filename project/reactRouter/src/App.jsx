import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
//outlet is used to render the content of the page Keeping header and foooter same: 
//only outlet changes

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
