export interface User {
  id: number | string
  name: string
  email: string
}

export interface AuthState {
  user: null | User
  token: null | string
}

export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  token: null | string
}
