import counter from './counter';
import { userApi } from '../services/user';

export default {
  counter,
  [userApi.reducerPath]: userApi.reducer
};
