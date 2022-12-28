import {createSlice} from "@reduxjs/toolkit";
import {authLogin, authRegister} from "../../service/Auth-service";


const initialState = {
    currentAuth: JSON.parse(localStorage.getItem('auth'))
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(authLogin.fulfilled, (state, action)=>{
            state.currentAuth = action.payload
            localStorage.setItem('auth', JSON.stringify(action.payload))
        })
        builder.addCase(authRegister.fulfilled,(state, action)=>{
            state.currentAuth = action.payload
        })
    }
})
export default authSlice.reducer