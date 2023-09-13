import { FilteredUser, UserLoginResponse } from './types'

const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT || 'http://localhost:5000'

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get('Content-Type') || ''
  const isJson = contentType.includes('application/json')
  const data = isJson ? await response.json() : await response.text()

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors))
    }

    throw new Error(data.message || response.statusText)
  }

  return data as T
}

// export async function apiRegisterUser(credentials: string): Promise<FilteredUser> {
//   const response = await fetch(`${SERVER_ENDPOINT}/api/auth/register`, {
//     method: 'POST',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: credentials,
//   })

//   return handleResponse<UserResponse>(response).then((data) => data.data.user)
// }

export async function apiLoginUser(credentials: string): Promise<Pick<UserLoginResponse, 'data'>> {
  const response = await fetch(`${SERVER_ENDPOINT}/api/v1/users/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: credentials,
  })

  return handleResponse<UserLoginResponse>(response).then((data) => data)
}

// export async function apiLogoutUser(): Promise<void> {
//   const response = await fetch(`${SERVER_ENDPOINT}/api/auth/logout`, {
//     method: 'GET',
//     credentials: 'include',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })

//   return handleResponse<void>(response)
// }

// export async function apiGetAuthUser(token?: string): Promise<FilteredUser> {
//   const headers: Record<string, string> = {
//     'Content-Type': 'application/json',
//   }

//   if (token) {
//     headers['Authorization'] = `Bearer ${token}`
//   }
//   const response = await fetch(`${SERVER_ENDPOINT}/api/users/me`, {
//     method: 'GET',
//     credentials: 'include',
//     headers,
//   })

//   return handleResponse<UserResponse>(response).then((data) => data.data.user)
// }

const getToken = () => localStorage.getItem('token')
export async function apiGetTasks(shouldAttachToken?: boolean): Promise<any> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (shouldAttachToken) {
    headers['Authorization'] = `Bearer ${getToken()}`
  }
  const response = await fetch(`${SERVER_ENDPOINT}/api/v1/tasks/get-task`, {
    method: 'GET',
    credentials: 'include',
    headers,
  })

  return Promise.resolve(response).then((data) => data)
}
