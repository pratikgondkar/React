import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    // counter = counter + 1
    if( counter < 20) {
      setCounter(counter + 1)
    }
    
    // console.log("clicked", counter);
  }

  const removeValue = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  return (
    <>
    <h1>Chai Aur React</h1>
    <h2>Counter value is: {counter} </h2>
    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
  )
}

export default App
