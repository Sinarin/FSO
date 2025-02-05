import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = ({name, age}) => {

  const bornYear = () => new Date().getFullYear() - age
  

  return (
    <div>
      <p>
        Hello {name} you are {age} years old
      </p>
      <p>
        So you were probably born in {bornYear()}
      </p>
    </div>
  )
}

const Display = ({counter}) =><div>{counter}</div>


const Button = ({onClick, text}) => (
    <button onClick={onClick}>
      {text}
    </button>
  )


const App = () => {
  
  const [counter, setCounter] = useState(0)
  console.log('Rendering the counter value', counter)

  const incrementByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('Resetting Counter, value before', counter)
    setCounter(0)
  }
  
  const propss = {
    name: "Doggen",
    age: 42,
  }

  return (
    <div>
    <Hello name="Mayan" age={12 + 31}/>
    <Hello name={propss.name} age={propss.age}/>
    <Display counter={counter}/>
    <Button onClick={incrementByOne} text="Plus 1"/>
    <Button onClick={decreaseByOne} text="Minus 1"/>
    <Button onClick={setToZero} text="To Zero"/>
  </div>
  )
}

export default App
