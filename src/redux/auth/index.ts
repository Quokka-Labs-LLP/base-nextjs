import api from './api'
import slice from './slice'

export const { endpoints: { login } } = api
export { default as authApi } from './api'
export const { actions: { logout } } = slice
export default slice.reducer
