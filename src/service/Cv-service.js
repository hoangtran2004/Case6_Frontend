import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addCv = createAsyncThunk('addCv', async (data) => {
    console.log(data)
    const res = await axios.post(`http://localhost:8080/cv`, data)
    return res.data
})
export const getCvByIdJob = createAsyncThunk('getCvByIdJob', async (id) => {
    const res = await axios.get(`http://localhost:8080/cv/${id}`)
    return res.data
})
