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
        const res = await axios.post(`http://localhost:8080/company/update/${data.companyId}?_method=PUT`, data.formData);
        return res
    }
)
export const workEditImage = createAsyncThunk(
    'work/editImage',
    async (data) => {
        console.log(data)
        const res = await axios.put(`http://localhost:8080/company/update-image/${data.companyId}`, data);
        return res
    }
)
export const workById = createAsyncThunk(
    'workById',
    async (id) => {
        const res = await axios.get(`http://localhost:8080/company/${id}`);
        return res.data.companyFind
    }
)
export const findImageByIdCompany = createAsyncThunk(
    'findImageByIdCompany',
    async (id) => {
        const res = await axios.get(`http://localhost:8080/company/${id}`);
        console.log(res, 1111111111111111)
        return res.data.companyFind
    }
)
export const findJobByIdWork = createAsyncThunk(
    'findJobByIdWork',
    async (id) => {
        const res = await axios.get(`http://localhost:8080/job/company-job/${id}`);
        return res.data
    }
)
export const getCompany = createAsyncThunk(
    'getCompany',
    async () => {
        const res = await axios.get(`http://localhost:8080/company/`)
        return res.data
    }
)
export const searchCompany = createAsyncThunk(
    'searchCompany',
    async (data) => {
        const res = await axios.post(`http://localhost:8080/company/search`,data)
        return res.data
    }
)
export const getTopCompany = createAsyncThunk(
    'getTop10Company',
    async () => {
        const res = await axios.get(`http://localhost:8080/company/top-companies`)
        return res.data
    }
)
export const setImage = createAsyncThunk(
    'setImage',
    async (data) => {
        console.log(data)
        return data
    }
)
