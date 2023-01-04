import {createSlice} from "@reduxjs/toolkit";
import {addJob, deleteJob, editJob, getJob, lockJob, searchJob, searchJobInput} from "../../service/Job-service";
import {findJobByIdWork} from "../../service/Work-service";


const initialState = {
    job: [],
    jobSearchInput: [],
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
            state.job = [...action.payload.job].reverse()
        });
        builder.addCase(deleteJob.fulfilled, (state, action) => {
            let newArr = [...state.job];
            let index = newArr.findIndex(item => item.jobId === action.payload);
            newArr.splice(index, 1)
            state.job = newArr
        });
        builder.addCase(lockJob.fulfilled, (state, action) => {
            console.log(action.payload)
            state.job = action.payload.jobs
        });
        builder.addCase(editJob.fulfilled, (state, action) => {
            state.job = action.payload.job
        });
        builder.addCase(searchJob.fulfilled, (state, action) => {
            state.job = action.payload
        })
        builder.addCase(searchJobInput.fulfilled, (state, action) => {
            state.jobSearchInput = action.payload
        })
        builder.addCase(findJobByIdWork.fulfilled, (state, action) => {
            state.job = action.payload
        })
    }
})

export default jobSlice.reducer