import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'account/login',
    async (data) => {
        let response = (await axios.post('http://localhost:8080/account/login', data));
        return response.data;
    }
)
export const register = createAsyncThunk(
    'account/register',
    async (data) => {
        let response = (await axios.post('http://localhost:8080/account/register', data));
        return response.data;
    }
)
export const getUser = createAsyncThunk(
    'account/get',
    async (id) => {
        let response = await axios.get('http://localhost:8080/account/'+ id);
        return response.data;
    }
)