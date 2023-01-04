import {createSlice} from "@reduxjs/toolkit";
import {getUser, loginUser, register} from "../../services/userService";

const initialState = {
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')),
    // currentUser: JSON.parse(1),
    checkLogin: false
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            if (payload.user) {
                localStorage.setItem('currentUser', JSON.stringify(payload));
                localStorage.setItem('token', payload.token)
                localStorage.setItem('userId', payload.userId)
            }
            state.currentUser = payload.user;
        });
        builder.addCase(register.fulfilled, (state, {payload}) => {
            state.users.push(payload);
        });
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
            state.currentUser = payload;
        })
    }
});
export default userSlice.reducer;