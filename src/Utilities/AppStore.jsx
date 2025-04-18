import {configureStore, createSlice} from '@reduxjs/toolkit';
import userSliceReducer from './userSlice';


const AppStore = configureStore({
  reducer: {
    user: userSliceReducer,
  }
});
export default AppStore;