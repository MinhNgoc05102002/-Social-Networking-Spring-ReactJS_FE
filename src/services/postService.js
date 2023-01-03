import {createAsyncThunk} from "@reduxjs/toolkit";
// import customAxios from "./api";
import axios from "axios";


export const getPosts = createAsyncThunk(
    'posts/get',
    async (data) => {
        const response = await axios.get('http://localhost:8080/posts', data)
        return response.data;
    }
)

export const addPost = createAsyncThunk(
    'posts/add',
    async (data) => {
        const response = await axios.post('http://localhost:8080/posts', data)
        return response.data;
    }
)