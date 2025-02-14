import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Statline = ({name, stat}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{stat}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

if (good != 0 || neutral != 0 || bad !=0 ) {
  const total = good + neutral + bad
  const average = (good - bad)/total
  return (
    <table>
      <Statline name="good" stat={good}/>
      <Statline name="neutral" stat={neutral}/>
      <Statline name="bad" stat={bad}/>
      <Statline name="all" stat={total}/>
      <Statline name="average" stat={average}/>
      <Statline name="positve" stat={good/total}/>
    </table>
  )
  }
  return (
    <div>
      No Feedback Given
    </div>
  )
}

const Button = ({name, onClick}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h2>Give Feeback</h2>
      <Button name="Good" onClick={()=> setGood(good + 1)}/>
      <Button name="Neutral" onClick={()=> setNeutral(neutral + 1)}/>
      <Button name="Bad" onClick={()=> setBad(bad + 1)}/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
