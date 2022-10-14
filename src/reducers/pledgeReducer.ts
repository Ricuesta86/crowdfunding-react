import api from "../api";
import { product } from '../type';

const inicialState:product[]=api.data.list();

const actionDecremented25 = {
    type:'@pledge/Decremented25'
}
const actionDecremented75 = {
    type:'@pledge/Decremented75'
}
const actionDecremented200 = {
    type:'@pledge/Decremented200'
}

export default function pledgeReducer(inicialState:product[],action:any){
    const {type} = action;
    switch (type) {
        case '@pledge/Decremented25':
            inicialState.map(product=>product.pledge===25?{...product,amount:product.amount-1}:product)
            return inicialState;
        case '@pledge/Decremented75':
            inicialState.map(product=>product.pledge===75?{...product,amount:product.amount-1}:product)
            return inicialState;
        case '@pledge/Decremented200':
            inicialState.map(product=>product.pledge===200?{...product,amount:product.amount-1}:product)
            return inicialState;    
        default:
            return inicialState;
    }
}