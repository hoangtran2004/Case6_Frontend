import {createSlice} from "@reduxjs/toolkit";
import {getCvByIdJob} from "../../service/Cv-service";


const initialState = {
    cvFind: []
}

const cvSlice = createSlice({
    name: "cv",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCvByIdJob.fulfilled, (state, action) => {
            let userId = localStorage.getItem('id')
            state.cvFind = action.payload.filter((item) => {
                return item.userId == userId
            })
        })
    }
})
export default cvSlice.reducer