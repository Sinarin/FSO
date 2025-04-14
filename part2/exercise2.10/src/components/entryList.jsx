const Entrylist = ({namesToShow}) => {
    return (
        <ul>
          {namesToShow.map( person => <li key={person.name}>name: {person.name} - Phone Number: {person.phone}</li>)}
        </ul>
    )
}

export default Entrylist