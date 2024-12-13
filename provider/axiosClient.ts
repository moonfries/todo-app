import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: 'http://192.168.254.103:3000',
    timeout: 1000,
})

// baseURL: 'http://10.0.2.2:3000',