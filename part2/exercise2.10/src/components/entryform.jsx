const Entryform = ({addEntry, newName, handleNewNameChange, newNumber, handleNewNumberChange}) => {
    return (
        <form onSubmit={addEntry}>
        <div>
          name: 
          <input 
          value={newName}
          onChange={handleNewNameChange}
          />
        </div>
        <div>
          Phone Number:
          <input
          value={newNumber}
          onChange={handleNewNumberChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    )
}

export default Entryform