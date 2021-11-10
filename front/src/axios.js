import axios from 'axios'
import { baseUrl } from './config'

const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(
    async (config) => {
        // Do something before request is sent
        config.baseURL = baseUrl;
        return config;
    },
    (error) => {
        // Do something with request error
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'Something went wrong!'
        )
)

export default axiosInstance
