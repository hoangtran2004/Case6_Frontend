import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCity = createAsyncThunk(
    'getCity',
    async ()=>{
        const res = await axios.get(`http://localhost:8080/city`)
        return res.data
    }
)