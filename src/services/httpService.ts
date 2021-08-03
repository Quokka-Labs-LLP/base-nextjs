import axiosInstance from "./httpInterceptor";

const getRequest = (url: string): void => {
    axiosInstance.get(url)
}

const postRequest = (url: string, body: any): void => {
    axiosInstance.post(url, body)
}

const putRequest = (url: string, body: any): void => {
    axiosInstance.put(url, body)
}

const patchRequest = (url: string, body: any): void => {
    axiosInstance.patch(url, body)
}

const deleteRequest = (url: string): void => {
    axiosInstance.delete(url)
}

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };