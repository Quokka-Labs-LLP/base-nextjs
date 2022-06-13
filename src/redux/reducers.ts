import { authApi, authReducer } from './auth'

const reducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
}
export default reducers
