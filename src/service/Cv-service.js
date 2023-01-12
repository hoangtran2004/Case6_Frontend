import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addCv = createAsyncThunk('addCv', async (data) => {
    console.log(data)
    const res = await axios.post(`http://localhost:8080/cv`, data)
    return res.data
})
export const checkCv = createAsyncThunk('getCvByIdJob', async (id) => {
    const res = await axios.get(`http://localhost:8080/cv/${id}`)
    return res.data
})
export const getCv = createAsyncThunk('getCv', async (id) => {
    const res = await axios.get(`http://localhost:8080/cv/${id}`)
    return res.data
})

