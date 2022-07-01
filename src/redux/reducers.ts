import { authApi, authReducer } from './auth'

/**
 * reducers
 *
 * If this is a single function, it will be directly used as the root reducer for the store.
 *
 * If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer},
 * configureStore will automatically create the root reducer by passing this object to the
 * [Redux combineReducers utility](https://redux.js.org/api/combinereducers).
 *
 */
const reducers = {
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
}
export default reducers
