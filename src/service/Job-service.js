import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const addJob = createAsyncThunk(
    'addJob',
    async (data) => {
        const res = await axios.post(`http://localhost:8080/job/`, data)
        return data
    }
)
export const getJob = createAsyncThunk(
    'getJob',
    async () => {
        const res = await axios.get(`http://localhost:8080/job/`)
        return res.data
    }
)
export const deleteJob = createAsyncThunk(
    'deleteJob',
    async (payload) => {
        console.log(payload)
        const res = await axios.delete(`http://localhost:8080/job/` + payload.id)
        return payload.id
    }
)