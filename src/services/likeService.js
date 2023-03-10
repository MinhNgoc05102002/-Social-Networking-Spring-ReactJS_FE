import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addLike = createAsyncThunk(
    'likes/add',
    async (data) => {
        const response = await axios.get('http://localhost:8080/posts/', data)
        return response.data;
    }
)
export const getLike = createAsyncThunk(
    'likes/get',
    async (id) => {
        const response = await axios.get('http://localhost:8080/posts/'+ id + '/likes');
        return response.data;
    }
)