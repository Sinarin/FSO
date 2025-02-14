import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Button = ({name, onClick}) => {
  return (
    <button onClick={onClick}>{name}</button>
  )
}

const Showvotes = ({votes}) => {
  if (votes == null) {
    return (
      <div>Has 0 Votes</div>
    )
  }
  return (
    <div>Has {votes} votes</div>
  )
}

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

   
 const [selected, setSelected] = useState(0)
 const [votes, setVotes] = useState({})
 const [highest, setHighest] = useState(0)
 const [highestanecdote, setHighestAnecdote] = useState(0)
 

 const generate = () => {
  if (anecdotes.length - 1 > 0) {
    const randomNumber = Math.floor(Math.random()*(anecdotes.length - 1))
    console.log(randomNumber)
   setSelected(randomNumber)
  }
}




const vote = () => {
  const newVotes = {...votes}
  console.log(votes[{selected}])
  console.log(selected)
  if (newVotes[selected] == null) {
    newVotes[selected] = 1
  } else {
    newVotes[selected] += 1
  }
  if (newVotes[selected] > highest) {
    setHighest(newVotes[selected])
    setHighestAnecdote(selected)
  }
  setVotes(newVotes)
}


  return (
    <div>
      <div>
        {anecdotes[selected]}
      </div>
        <Showvotes votes={votes[selected]}/>
      <div>
        <Button name="generate" onClick={() => generate()}/>
        <Button name="vote" onClick={() => vote()}/>
      </div>
      <div>
        {anecdotes[highestanecdote]}
      </div>
    </div>
  )
}

export default App
