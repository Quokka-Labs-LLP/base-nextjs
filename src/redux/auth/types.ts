export interface AuthState {
  user: null | string
  token: null | string
  isAuthenticated: boolean
}

export interface LoginResponse {
  access_token: string
  expires_in: number
  token_type: string
}
