import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const addJob = createAsyncThunk(
    'addJob',
    async (data) => {
        await axios.post(`http://localhost:8080/job/`, data)
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
        const res = await axios.delete(`http://localhost:8080/job/` + payload.id)
        return payload.id
    }
)
export const lockJob = createAsyncThunk(
    'lockJob',
    async (payload) => {
        const res = await axios.put(`http://localhost:8080/job/status/` + payload.id)
        return res.data
    }
)

export const editJob = createAsyncThunk(
    'editJob',
    async (data) => {
        const res = await axios.put(`http://localhost:8080/job/${data.jobId}`, data)
        return res.data
    }
)

export const searchJob = createAsyncThunk(
    'searchJob',
    async (query) => {
        console.log(query)
        const res = await axios.get(`http://localhost:8080/job/search?` + query)
        return res.data
    }
)

export const searchJobInput = createAsyncThunk(
    'searchJobInput',
    async (data) => {
        return data
    }
)

export const findJobById = createAsyncThunk(
    'findJobById',
    async (id) => {
        return id
    }
)
export const findJobWithId = createAsyncThunk(
    'findJobWithId',
    async (id) => {
        let res = await axios.get(`http://localhost:8080/job/detail/${id}`)
        return res.data
    }
)
export const detailJob = createAsyncThunk(
    'detailJob',
    async (data) => {
        const res = await axios.get(`http://localhost:8080/job/detail/` + data)
        return res.data
    }
)
export const findAllJobOfCompany = createAsyncThunk(
    'findJobByWork',
    async (id) => {
        console.log('id company', id)
        const res = await axios.get(`http://localhost:8080/job/company-job/${id}`);
        return res.data
    }
)