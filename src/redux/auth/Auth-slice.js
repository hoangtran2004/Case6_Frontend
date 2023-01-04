import {createSlice} from "@reduxjs/toolkit";
import {authLogin, authRegister} from "../../service/Auth-service";


const initialState = {
    currentAuth: {}
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(authLogin.fulfilled, (state, action)=>{
            console.log(action)
            state.currentAuth = action.payload
            if(action.payload.token){
                localStorage.setItem('token',action.payload.token)
                localStorage.setItem('name',action.payload.user.name)
            }

        })
        builder.addCase(authRegister.fulfilled,(state, action)=>{
            state.currentAuth = action.payload
        })
    }
})
export default authSlice.reducer