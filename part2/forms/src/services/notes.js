import axios from 'axios'
const baseUrl = 'http://localhost:3003/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 100000,
        content: "yoyoyoyoyo",
        important: true,
    }
    return request.then(response => response.data.concat(nonExisting)).catch(error => console.log("asdfdasfsadfdasfas fail"))
}       

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update }