import { authApi } from './auth'

const reducer = {
  [authApi.reducerPath]: authApi.reducer,
}

export default reducer
