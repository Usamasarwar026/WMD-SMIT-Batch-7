import { configureStore } from "@reduxjs/toolkit";
import  productReducer  from "./slices/productSlices";

export const store = configureStore({
    reducer: {
        product: productReducer,
    }
})