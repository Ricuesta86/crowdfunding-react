import { createSlice } from '@reduxjs/toolkit'
import api from '../api';


const mastercraftSlice = createSlice({
    name: 'mastercraft',
    initialState: api.data.data,
    reducers: {
        backedAdded(state,action){
            // state={
            //     ...state,
            //     backed:state.backed+action.payload.backed
            // }
            state.backed+=action.payload.backed
        },
        backersIncremented(state,action){
            // state={
            //     ...state,
            //     totalBackers:state.totalBackers+1
            // }
            state.totalBackers+=1
        }

    }

})

export const {backedAdded,backersIncremented} = mastercraftSlice.actions;
export default mastercraftSlice.reducer;