import axios from 'axios'
const baseUrl = 'http://localhost:3003/notes'

const getAll = () => {
    axios.get(baseUrl)
}

const create = () => {
    axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    axios.put(`${baseUrl}${id}`, newObject)
}

export default {
    getAll: getAll,
    create: create,
    update: update 
}