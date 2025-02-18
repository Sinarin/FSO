const Course = ({course}) => {
    return (
        <div>
            <h1>Half Stack application development</h1>
            {course.parts.map(part => <div>{part.name} {part.exercises}</div>)}
        </div>
    )
}



export default Course