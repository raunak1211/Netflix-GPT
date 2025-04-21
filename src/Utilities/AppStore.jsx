import {configureStore, createSlice} from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';
import moviesSliceReducer from './moviesSlice';

const AppStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
  }
});
export default AppStore;