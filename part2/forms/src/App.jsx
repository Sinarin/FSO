import {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Note from './components/Notes'
import noteService from './services/notes '
import notes from './services/notes'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
    .get('http://localhost:3003/notes')
    .then(response => {
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  }

  useEffect(() => {
    noteService
    .getAll()
    .then(response => setNotes(response.data))
  }
    , [])

  console.log('render', notes.length, 'notes')

  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const url = `http://localhost:3003/notes/${id}`
    const note = notes.find(note => note.id === id)
    const changedNote = {...note, important: !note.important}

    noteService.update(id, changedNote).then(response => {
      setNotes(notes.map( note => { id === note.id ? response.data : note }))
    })

    axios.patch(url, changedNote).then(response => {
      setNotes(notes.map(note => id === note.id ? response.data : note))
    })
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }

    axios
      .post('http://localhost:3003/notes', noteObject)
      .then(response => {
        console.log(response)
        setNotes(notes.concat(response.data))
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
