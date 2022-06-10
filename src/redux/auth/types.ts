export type User = null | string
export type AuthToken = null | string

export interface AuthState {
  user: User
  token: AuthToken
  isAuthenticated: boolean
}

export interface LoginResponse {
  access_token: string
  expires_in: number
  token_type: string
}

export interface LoginRequest {
  username: string
  password: string
}
