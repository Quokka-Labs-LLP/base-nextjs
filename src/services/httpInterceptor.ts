import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const baseURL = 'https://jsonplaceholder.typicode.com/';

const headers = {
    'Content-Type': 'application/json',
    'type': 2
}

const axiosInstance = axios.create({
    baseURL
})


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    debugger
    request.headers = headers;
    return request;
},
    <T>(err: AxiosError<T>) => {
        return Promise.reject(err);
    });

axiosInstance.interceptors.response.use(<T>(response: AxiosResponse<T>) => {
    return response;
},
    <T>(err: AxiosError<T>) => {
        return Promise.reject(err);
    }
);

export default axiosInstance;