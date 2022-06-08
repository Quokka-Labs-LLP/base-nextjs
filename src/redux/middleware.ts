import { userApi } from '../services/user';

export default {
  middleware: (getDefaultMiddleware: any): any =>
    getDefaultMiddleware().concat(userApi.middleware)
};
