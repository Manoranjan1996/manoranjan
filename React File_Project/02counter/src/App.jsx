import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  const addvalue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("Value Add",counter);
  }
  const removeValue = ()=> {
    setCounter(counter-1)
  }
  return (
    <>
      <h1>Manoj RAdhy Radhy</h1>
      <h1>Jay shree Ram {counter}</h1>
      <button onClick={addvalue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
