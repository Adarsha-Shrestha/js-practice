import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [title,setTitle] = useState('My name is adarsha');

  function RandomNumber(){
    setTitle('My name is '+ Math.random());
  }

  return (
    <>
      <button onClick={RandomNumber}>Click Me</button>
      <Header title={title} />
      <Header title="Hello Vite + React!" />
    </>
  )
}

function Header({title}){
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}



export default App
