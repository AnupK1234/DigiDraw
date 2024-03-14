import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slice/menuSlice.js"

export const store = configureStore({
    reducer: {
        menu: MenuReducer
    }
})