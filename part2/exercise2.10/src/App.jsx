import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/search'
import Entryform from './components/entryform'
import Entrylist from './components/entryList'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNumber] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {axios
    .get('http://localhost:3003/persons')
    .then( response => {
      setPersons(response.data)
    })}
  
  ,[])

  const addEntry = (event) => {
    event.preventDefault()
    const message = `${newName} already exists`
    if (persons.some(person => person.name === newName)) {
      alert(message)
    } else{
      axios.post('http://localhost:3003/persons', {name : newName, number: newNumber})
      .then(response => setPersons(persons.concat(response.data)))
      
      //setPersons(persons.concat({ name : newName, number: newNumber, id : String(persons.length + 1)}))
      //setNumber
    }
    }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const namesToShow = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Numberbook</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <h2>add a new</h2>
      <Entryform addEntry={addEntry} newName={newName} handleNewNameChange={handleNewNameChange} 
        newNumber={newNumber} handleNewNumberChange={handleNewNumberChange}/>
        <h2>Numbers</h2>
      <Entrylist namesToShow={namesToShow}/>
    </div>
  );
};


export default App;
