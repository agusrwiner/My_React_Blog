import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My blog!</h1>
      <div id='page-body'>
        Welcome to my Blog!
      </div>
    </>
  )
}

export default App
