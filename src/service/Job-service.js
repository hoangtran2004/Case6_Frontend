import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {useParams} from "react-router-dom";



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
        console.log('delete',payload)
        const res = await axios.delete(`http://localhost:8080/job/` + payload.id)
        console.log('delete',res)
        return payload.id
    }
)
export const lockJob = createAsyncThunk(
    'lockJob',
    async (payload) => {
        const res = await axios.put(`http://localhost:8080/job/status/` + payload.id)
        console.log(res)
        console.log(payload)
        return res.data
    }
)

export const editJob = createAsyncThunk(
    'editJob',
    async (data)=>{
        console.log(data)
        const res = await axios.put(`http://localhost:8080/job/${data.jobId}`,data)
        console.log(res)
        return res.data
    }
)