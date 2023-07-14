import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

export const baseURL = 'https://jsonplaceholder.typicode.com'

const api: AxiosInstance = axios.create({
  baseURL, // add all any other headers you need here
})

api.interceptors.request.use((request: any) => {
  if (localStorage.getItem('userToken')) {
    // here we add headers in api (axiosinstance)
    // request.headers = {
    //   AuthorizationToken: String(localStorage.getItem('userToken')),
    // }
  }
  return request
})

api.interceptors.response.use(
  (response: AxiosResponse<any>) => response,
  (err: AxiosError<any>) => Promise.reject(err),
)

export default api
