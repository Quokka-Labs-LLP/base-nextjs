import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

import { authApi } from './auth'

/**
 * Adding the api middleware enables caching, invalidation, polling,
 * and other useful features of `rtk-query`.
 */
const middleware = {
  // eslint-disable-next-line
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware): any =>
    getDefaultMiddleware().concat(authApi.middleware),
}

export default middleware
