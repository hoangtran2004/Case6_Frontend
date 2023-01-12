import {createSlice} from "@reduxjs/toolkit";
import {checkCv, getCv} from "../../service/Cv-service";


const initialState = {
    cvFind: []
}

const cvSlice = createSlice({
    name: "cv",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(checkCv.fulfilled, (state, action) => {
            let userId = localStorage.getItem('id')
            state.cvFind = action.payload.filter((item) => {
                return item.userId == userId
            })
        })
        builder.addCase(getCv.fulfilled, (state, action) => {
            state.cvFind = action.payload
        })

    }
})
export default cvSlice.reducer