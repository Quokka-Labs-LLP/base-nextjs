import { authApi, authReducer } from './auth'
import { counterReducer } from './counter'

const reducer = {
  auth: authReducer,
  counter: counterReducer,
  [authApi.reducerPath]: authApi.reducer,
}

export default reducer
