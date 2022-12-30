import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const addJob = createAsyncThunk(
    'addJob',
    async (data)=>{
        const res = await axios.post(`http://localhost:8080/job/`,data)
        return data
    }
)
export const getJob = createAsyncThunk(
    'getJob',
    async ()=>{
        const res = await axios.get(`http://localhost:8080/job/`)
        return res.data
    }
)