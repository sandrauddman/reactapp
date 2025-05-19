import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Center from './components/Center'
import Navbar from './components/navbar'
import Counter from './components/Counter'
import Form from './components/Form'
import UserCard from './components/UserCard'
import FetchData from './components/fetchdata'
import Window from './components/window'
import FormValidation from './components/formvalidation'


function App() {
 
  const user={
    name: "Sandra Uddman",
    email: "s.uddman@gmail.com",
    country: "Sweden"
  }

  return (
    <>
    <Navbar/>
   
    
    <div className='welcometext'>
      
    <h1>Welcome to my react page</h1>
    
    </div>
    <FormValidation/>
  <Center/>
  <Window/>

  <Counter/>
  <Form/>

  <UserCard user={user}/>

  <FetchData/>
    
    </>
  )
}

export default App
