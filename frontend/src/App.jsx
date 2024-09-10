import { useState } from 'react'
import './App.css'
import Gnew from './components/Gnew'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Gnew />
    </>
  )
}

export default App
