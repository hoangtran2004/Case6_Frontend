import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const addJob = createAsyncThunk(
    'addJob',
    async (data)=>{
        console.log(data)
        const res = await axios.post(`http://localhost:8080/job/`,data)
        console.log(res)
        return res.data
    }
)