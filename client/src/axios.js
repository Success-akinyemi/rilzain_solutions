import axios from 'axios'

//const BASE_URL: 'http://localhost:5000'

export const request = axios.create({
    baseURL: 'http://localhost:9000'
    //https://happyabode.onrender.com
    //http://localhost:5000
})