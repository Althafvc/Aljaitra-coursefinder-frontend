import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:7878',
    headers: {
        'Content-Type' : 'application/json',
    },
    timeout:10000
})


export default axiosInstance