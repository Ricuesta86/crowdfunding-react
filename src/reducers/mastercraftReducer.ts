import { createSlice } from '@reduxjs/toolkit'
import api from '../api';
import type { dataType } from '../type';


const initialState:dataType = api.data.data;

const mastercraftSlice = createSlice({
    name: 'mastercraft',
    initialState,
    reducers: {
        backedAdded(state,action){
            // state={
            //     ...state,
            //     backed:state.backed + action.payload.backed
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