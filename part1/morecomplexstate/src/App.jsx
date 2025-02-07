import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//defines state and use setstate to compare and change
const App = () => {
  const [clicks, setClicks] = useState({left: 0, right: 0})

  //avoid mutating states by directly changeing the state eg variable = somevalue
  const handleLeftClicks = () => setClicks({...clicks, left: clicks.left + 1,}) 

  const handleRightClicks = () => setClicks({ ...clicks, right: clicks.right + 1, })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>
        Left
      </button>
      {clicks.right}
      <button onClick={handleRightClicks}>
        Right
      </button>
    </div>
  )

}

export default App
