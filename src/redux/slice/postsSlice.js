import { createSlice } from "@reduxjs/toolkit"
import {getPosts} from "../../services/postService"

const initialState = {
    posts: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
})

export default postsSlice.reducer;