import { api as authApi, useLoginMutation } from './auth.api'
import authReducer, { login, logout, renewToken } from './auth.slice'

export * from './types'
export { authApi, authReducer, login, logout, renewToken, useLoginMutation }
