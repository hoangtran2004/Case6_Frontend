import {createSlice} from "@reduxjs/toolkit";
import {addJob, deleteJob, getJob, lockJob} from "../../service/Job-service";


const initialState = {
    job: []
}

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addJob.fulfilled, (state, action) => {
            state.job = [...state.job, action.payload]

        })
        builder.addCase(getJob.fulfilled, (state, action) => {
            state.job = [...action.payload].reverse()
        });
        builder.addCase(deleteJob.fulfilled, (state, action) => {
            let newArr = [...state.job];
            let index = newArr.findIndex(item => item.jobId === action.payload);
            newArr.splice(index, 1)
            state.job = newArr
        });
        builder.addCase(lockJob.fulfilled, (state, action) => {
            console.log(action)
            state.job = action.payload.jobs
        });
    }
})

export default jobSlice.reducer