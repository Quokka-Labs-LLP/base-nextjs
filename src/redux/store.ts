import { configureStore } from '@reduxjs/toolkit';

import reducer from './reducers';
import middleware from './middleware';

export const store: any = configureStore({
  reducer,
  ...middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
