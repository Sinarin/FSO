const Entryform = ({addEntry, newName, handleNewNameChange, newPhone, handleNewPhoneChange}) => {
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
          value={newPhone}
          onChange={handleNewPhoneChange}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    )
}

export default Entryform