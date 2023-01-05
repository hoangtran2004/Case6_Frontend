import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getAlCity = createAsyncThunk(
    'addJob',
    async () => {
        const res = await axios.post(`http://localhost:8080/city/`)
        console.log(res)
        return res.data
    }
)