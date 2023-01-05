import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const workLogin = createAsyncThunk(
    'work/login',
    async (data) => {
        const res = await axios.post(`http://localhost:8080/company/login`, data)
        return res.data
    }
)
export const workRegister = createAsyncThunk(
    'work/register',
    async (data) => {
        const res = await axios.post(`http://localhost:8080/company/register`, data)
        return res.data
    }
)
export const workEditInformation = createAsyncThunk(
    'work/edit',
    async (data) => {
        const res = await axios.put(`http://localhost:8080/company/update/${data.companyId}`, data);
        return res
    }
)
export const workById = createAsyncThunk(
    'workById',
    async (id) => {
        console.log('hihi')
        console.log(id)
        const res = await axios.get(`http://localhost:8080/company/${id}`);
        console.log(res)
        return res.data.companyFind
    }
)
export const getCompany = createAsyncThunk(
    'getCompany',
    async () => {
        const res = await axios.get(`http://localhost:8080/company/`)
        return res.data
    }
)