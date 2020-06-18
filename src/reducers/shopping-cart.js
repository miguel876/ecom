import { ADD_CART } from './actionTypes.js';

const cartList = (product = "", action) =>{
    switch(action){
        case ADD_CART:
            return product;
        
        default:
            return product;
    }

}

export default cartList;