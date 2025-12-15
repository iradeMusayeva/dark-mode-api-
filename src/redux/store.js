import { configureStore } from "@reduxjs/toolkit";
import darkReducer from "../slices/darkSlice";


export const store = configureStore({
    reducer: {
        dark: darkReducer,
    }
})