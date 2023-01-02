import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slice/postsSlice";
import userReducer from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        users : userReducer,
        post : postReducer
    }
})