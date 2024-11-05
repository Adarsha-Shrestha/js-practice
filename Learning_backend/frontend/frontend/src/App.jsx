import { useState } from 'react'
import DataDisplay from './components/data'
import UserDataDisplay from './components/dataUser'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Signup from './components/signUp'


function App() {

  return (
    <div>
      <Signup></Signup>
      <DataDisplay />
      <UserDataDisplay />
    </div>
  )
}

export default App
