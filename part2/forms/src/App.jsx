import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Note from './components/Notes'
import noteService from './services/notes'




const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)


  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }
    , [])

  console.log('render', notes.length, 'notes')

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3003/notes/${id}`
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote).then(returnedNote => {
      setNotes(notes.map( note => id === note.id ? returnedNote : note ))})
      .catch(error => {
        alert('This note has already been deleted from the server')
        setNotes(notes.filter(n => n.id !== id))
      })

  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })



  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }


  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={ () => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
        <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>)}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App
