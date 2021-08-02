import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const baseURL = 'baseURL';

const headers = {
    'Content-Type': 'application/json'
}

const axiosInstance = axios.create({
    baseURL
})


axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
    request.headers = headers;
    return request;
},
    (err: AxiosError<any>) => {
        return Promise.reject(err);
    });

axiosInstance.interceptors.response.use((response: AxiosResponse<any>) => {
    return response;
},
    (err: AxiosError<any>) => {
        return Promise.reject(err);
    }
);

export default axiosInstance;