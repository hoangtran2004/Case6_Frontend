import {createSlice} from "@reduxjs/toolkit";
import {workLogin} from "../../service/Work-service";

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
    }
})

export default workSlice.reducer