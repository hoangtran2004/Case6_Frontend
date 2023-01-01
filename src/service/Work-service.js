import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const workLogin = createAsyncThunk(
    'work/login',
    async (data)=>{
        const res = await axios.post(`http://localhost:8080/company/login`,data)
        return res.data
    }
)
export const workRegister = createAsyncThunk(
    'work/register',
    async (data)=>{
        const res = await axios.post(`http://localhost:8080/company/register`,data)
        return res.data
    }
)
export const workEditInformation = createAsyncThunk(
    'work/edit',
    async (id,data)=>{
        const res = await axios.post(`http://localhost:8080/company/update/${id}`,data)
        return res.data
    }
)
