import {createSlice} from "@reduxjs/toolkit";
import {workLogin} from "../../service/Work-service";

const initialState = {
    work: {}
}
const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(workLogin.fulfilled,(state, action) => {
            state.work =action.payload
        })
    }
})

export default workSlice.reducer