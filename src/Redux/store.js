import {configureStore} from "@reduxjs/toolkit";
import todoreducer from "../Redux/features/todoSlice"

export const store=configureStore({
    reducer:todoreducer
})