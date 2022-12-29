import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
    'getCategory',
    async (data)=>{
        const res = await axios.get(`http://localhost:8080/category`)
        return res.data
    }
)