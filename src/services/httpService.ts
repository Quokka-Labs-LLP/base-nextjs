import axiosInstance from "./httpInterceptor";

const getRequest = (url: string) => {
    axiosInstance.get(url)
}

const postRequest = (url: string, body: any) => {
    axiosInstance.post(url, body)
}

const putRequest = (url: string, body: any) => {
    axiosInstance.put(url, body)
}

const patchRequest = (url: string, body: any) => {
    axiosInstance.patch(url, body)
}

const deleteRequest = (url: string) => {
    axiosInstance.delete(url)
}

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };