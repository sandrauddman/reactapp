import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greetings from './components/greetings'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Greetings/>
    
    <div>
    <h1>Welcome to my react page</h1>
    <p>here information will updated very cool instant</p>
    </div>
    <Footer/>
    
    </>
  )
}

export default App
