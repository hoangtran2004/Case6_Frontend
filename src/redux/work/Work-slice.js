import {createSlice} from "@reduxjs/toolkit";
import {
    findJobByIdWork,
    getCompany, getTopCompany, searchCompany,
    workById,
    workEditInformation,
    workLogin,
    workRegister
} from "../../service/Work-service";

const initialState = {
    work: {},
    workFind: {}
}
const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(workLogin.fulfilled, (state, action) => {
            state.work = action.payload
            console.log(action, 22222)
            if (action.payload.token) {
                localStorage.setItem("tokenCompany", action.payload.token)
                localStorage.setItem('work', JSON.stringify(action.payload))
            }

        });
        builder.addCase(workRegister.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(workEditInformation.fulfilled, (state, action) => {
            console.log('state',state)
            state.workFind = action.payload.job

        });
        builder.addCase(workById.fulfilled, (state, action) => {
            state.workFind = action.payload[0]
        });
        builder.addCase(getCompany.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(searchCompany.fulfilled, (state, action) => {
            state.work = action.payload
        });
        builder.addCase(getTopCompany.fulfilled,(state, action)=>{
            state.work = action.payload
        });
    }
})

export default workSlice.reducer