import { createSlice } from '@reduxjs/toolkit'
import api from "../api";
import { product } from '../type';

const initialState:product[] =api.data.list();

const pledgeSlice =createSlice({
    name:'pledge',
    initialState,
    reducers:{
        pledgeDecremented(state,action){
            state.map(prod=>{
                // prod.pledge===action.payload.pledge?{...prod,amount:prod.amount-1}:prod
                if(prod.pledge===action.payload.pledge){
                    return {
                        ...prod,
                        amount:prod.amount-1
                    }
                }
                return prod
            })
            // console.log(state);
        }
    }
})

export const {pledgeDecremented}=pledgeSlice.actions;
export default pledgeSlice.reducer;