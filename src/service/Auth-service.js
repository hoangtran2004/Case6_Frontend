import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const authLogin = createAsyncThunk()


export const authRegister = createAsyncThunk(
    'auth/register',
    async (data)=>{
        console.log('data',data)
        const res = await axios.post(`http://localhost:8080/user/register`,data)
        console.log(res.data)
        return res.data
    }
)