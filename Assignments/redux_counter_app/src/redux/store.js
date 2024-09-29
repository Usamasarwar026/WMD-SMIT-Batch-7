import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})