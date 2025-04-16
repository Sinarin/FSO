const Entrylist = ({namesToShow}) => {
    return (
        <ul>
          {namesToShow.map( person => <li key={person.name}>name: {person.name} - Number: {person.number}</li>)}
        </ul>
    )
}

export default Entrylist