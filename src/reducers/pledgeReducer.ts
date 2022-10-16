import { createSlice } from '@reduxjs/toolkit'
import api from "../api";

const pledgeSlice =createSlice({
    name:'pledge',
    initialState:api.data.list(),
    reducers:{
        pledgeDecremented(state,action){
            state.map(pledge=>pledge.pledge===action.payload.pledge?{...pledge,amount:pledge.amount-1}:pledge)
        }
    }
})

export const {pledgeDecremented}=pledgeSlice.actions;
export default pledgeSlice.reducer;