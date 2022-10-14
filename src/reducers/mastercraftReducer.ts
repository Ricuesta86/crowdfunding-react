
import api from '../api';
import type {dataType} from '../type';


const initialState:dataType = api.data.data;
  
export const actionAdded = {
    type:'@dataType/added',
    payload:{
        backed:0
    }
}

export const actionIncremented = {
    type:'@dataType/incremented',
}


export default function mastercraftReducer(state: dataType=initialState,action:any){

    switch (action.type) {
        case '@dataType/added':
            return{
                ...state,
                backed:state.backed+action.payload.backed
            }
    
        case'@dataType/incremented':
            return{
                ...state,
                total:state.totalBackers+1
            }
        default:
            return state;
    }

}