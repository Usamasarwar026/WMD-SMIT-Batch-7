import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlice/studentSlice';


export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
})

export default store;