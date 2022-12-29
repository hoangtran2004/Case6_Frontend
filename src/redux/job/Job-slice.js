import {createSlice} from "@reduxjs/toolkit";
import {addJob} from "../../service/Job-service";


const initialState = {
    job: []
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder.addCase(addJob.fulfilled,(state, action)=>{
            state.job = action.payload
        })
    }
})

export default jobSlice.reducer