import { userApi } from '../services/user'
import { authApi } from './auth'

/**
 * Adding the api middleware enables caching, invalidation, polling,
 * and other useful features of `rtk-query`.
 */
export default {
  // eslint-disable-next-line
  middleware: (getDefaultMiddleware: any): any => getDefaultMiddleware().concat(userApi.middleware, authApi.middleware),
}
