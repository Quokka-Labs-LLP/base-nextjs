import { authApi, authReducer } from './auth'

const reducer = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
}

export default reducer
