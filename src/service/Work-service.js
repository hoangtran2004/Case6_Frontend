import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const workRegister=createAsyncThunk(
'work/register',
async(data)=>{
const res=await axios.post('http://localhost:8080/company/register',data);
return res.data
}
)
