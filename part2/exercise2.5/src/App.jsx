import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Course from  './components/Course'

function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises
}, 0)
//next past total in to course to display the sum 
  return (
  <div>
    <Course course={course} />
    <div>{total}</div>
  </div>
  
  )
}
export default App
