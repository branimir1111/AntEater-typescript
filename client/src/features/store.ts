import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice';
import projectReducer from './project/projectSlice';

export const store = configureStore({
  reducer: {
    userState: userReducer,
    themeState: themeReducer,
    projectState: projectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
