import {createSlice} from "@reduxjs/toolkit";
import {workLogin,workRegister} from "../../service/Work-service";

const initialState = {
    work: JSON.parse(localStorage.getItem('work'))
}
const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(workLogin.fulfilled,(state, action) => {
            state.work =action.payload
            localStorage.setItem('work',JSON.stringify(action.payload))
        })
        builder.addCase(workRegister.fulfilled,(state, action) => {
            state.work =action.payload
        })
    }
})

export default workSlice.reducer