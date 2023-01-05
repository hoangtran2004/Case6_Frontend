import {createSlice} from "@reduxjs/toolkit";
import {getCity} from "../../service/City-service";


const initialState = {
    city: []
}

const citySlice = createSlice({
    name: "city",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCity.fulfilled, (state, action) => {
            state.city = action.payload
        })
    }
})
export default citySlice.reducer