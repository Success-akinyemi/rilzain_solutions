import axios from 'axios'

//const BASE_URL: 'http://localhost:5000'

export const request = axios.create({
    baseURL: 'https://rilzain-solutions.onrender.com'
    //https://rilzain-solutions.onrender.com
    //http://localhost:9000
})