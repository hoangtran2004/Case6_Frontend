import {createSlice} from "@reduxjs/toolkit";
import {getCategory} from "../../service/Category-service";


const initialState = {
    category: {}
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCategory.fulfilled,(state, action) => {
            state.work =action.payload
        })
    }
})
export default categorySlice.reducer