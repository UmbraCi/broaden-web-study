import axios from 'axios'

const request = axios.create({
    baseURL: 'https://api.realworld.io/api',
})

export default request
