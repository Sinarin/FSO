import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/search'
import Entryform from './components/entryform'
import Entrylist from './components/entryList'

const App = () => {
  const [persons, setPersons] = useState([{ name : "Arto Hellas", phone : "3q452354"}]);
  const [newName, setNewName] = useState('');
  const [newPhone, setPhone] = useState('');
  const [search, setSearch] = useState('');

  const addEntry = (event) => {
    event.preventDefault()
    const message = `${newName} already exists`
    if (persons.some(person => person.name === newName)) {
      alert(message)
    } else{
      setPersons(persons.concat({ name : newName, phone: newPhone, id : String(persons.length + 1)}))
      setPhone
    }
    }

  const handleNewNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewPhoneChange = (event) => {
    console.log(event.target.value)
    setPhone(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  const namesToShow = search ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())) : persons

  return (
    <div>
      <div>debug: {newName}</div>
      <h2>Phonebook</h2>
      <Search search={search} handleSearch={handleSearch}/>
      <h2>add a new</h2>
      <Entryform addEntry={addEntry} newName={newName} handleNewNameChange={handleNewNameChange} 
        newPhone={newPhone} handleNewPhoneChange={handleNewPhoneChange}/>
        <h2>Numbers</h2>
      <Entrylist namesToShow={namesToShow}/>
    </div>
  );
};


export default App;
