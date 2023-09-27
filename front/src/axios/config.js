import axios from 'axios'


const blogFecth = axios.create({
    baseURL: "http://localhost:3001"
})

export default blogFecth