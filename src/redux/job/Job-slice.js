import {createSlice} from "@reduxjs/toolkit";
import {addJob, deleteJob, getJob} from "../../service/Job-service";


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
        });
        builder.addCase(getJob.fulfilled, (state, action) => {
            state.job = action.payload
        });
        builder.addCase(deleteJob.fulfilled, (state, action) => {
            let newArr = [...state.job];
            console.log(action)
            let index = newArr.findIndex(item => item.id === action.payload);
            newArr.splice(index, 1)
            state.job = newArr
        })
    }
})

export default jobSlice.reducer