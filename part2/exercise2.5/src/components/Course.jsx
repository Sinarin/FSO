const Total = ({total}) => {
    return <div class="total">Total of {total} exercises</div>
}

const Course = ({course}) => {
    const total = course.parts.reduce((sum, part) => {
        return sum + part.exercises
    }, 0)

    return (
        <div>
            <h2>{course.name}</h2>
            {course.parts.map(part => <div>{part.name} {part.exercises}</div>)}
            <Total total={total} />
        </div>
    )
}



export default Course