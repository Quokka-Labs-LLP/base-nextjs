import api, { baseURL } from './httpInterceptor'

export const getRequest = (url: string) => api.get(`${baseURL}${url}`)

export const postRequest = (url: string, body: any) => api.post(`${baseURL}${url}`, body)

export const putRequest = (url: string, body: any) => api.put(`${baseURL}${url}`, body)

export const deleteRequest = (url: string) => api.delete(`${baseURL}${url}`)
