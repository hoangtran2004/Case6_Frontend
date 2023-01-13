import {createSlice} from "@reduxjs/toolkit";
import {
    findImageByIdCompany,
    findJobByIdWork,
    getCompany, getTopCompany, searchCompany, setImage,
    workById,
    workEditInformation,
    workLogin,
    workRegister
} from "../../service/Work-service";

const initialState = {
    work: [],
    workFind: {},
    workImage: ''
}
const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(workLogin.fulfilled, (state, action) => {
            state.work = action.payload
            if (action.payload.token) {
                localStorage.setItem("tokenCompany", action.payload.token)
                localStorage.setItem('work', JSON.stringify(action.payload))
            }
        });
        builder.addCase(workRegister.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(workEditInformation.fulfilled, (state, action) => {
            state.workFind = action.payload.job
        });
        builder.addCase(workById.fulfilled, (state, action) => {
            state.workFind = action.payload[0]
        });
        builder.addCase(findImageByIdCompany.fulfilled, (state, action) => {
            state.workImage = action.payload[0].image
        });
        builder.addCase(getCompany.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(searchCompany.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(getTopCompany.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(setImage.fulfilled, (state, action) => {
            state.workImage = action.payload
        });
    }
})

export default workSlice.reducer