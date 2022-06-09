import { userApi } from '../services/user'
import auth, { authApi } from './auth'

export default {
  auth,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
}
