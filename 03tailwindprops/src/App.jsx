import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: 'abhilash',
    age: 20
  }

  return (
    <>
      <h1 className='bg-green-800 rounded-4xl'>testing tailwind v4</h1>
      <Card channel="Chaiaurcode" someObj = {myObj={}} />
      <Card />
    </>
  )
}

export default App

