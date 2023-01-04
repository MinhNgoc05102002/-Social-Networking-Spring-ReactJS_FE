import { createSlice } from "@reduxjs/toolkit"
import {getPosts} from "../../services/postService"
import {addPost} from "../../services/postService"
import { getPostsByUser } from "../../services/postService"

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
        });
        builder.addCase(addPost.fulfilled, (state, {payload}) => {
            state.posts.push(payload)
        });
        builder.addCase(getPostsByUser.fulfilled, (state, {payload}) => {
            state.posts = payload;
        });
    }
})

export default postsSlice.reducer;