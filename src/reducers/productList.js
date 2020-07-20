import { products } from '../products.js';
import { SHOW_PRODUCTS } from './actionTypes.js';


const productList = (state = [], action) =>{
    switch(action.type){
        case SHOW_PRODUCTS:
            return products;
        
        default:
            return state;
    }
}

export default productList;
