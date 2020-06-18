import { products } from '../products.js';
import { SHOW_PRODUCTS } from './actionTypes.js';

const productList = (action) =>{
    switch(action){
        case SHOW_PRODUCTS:
            return products;
        
        default:
            return products;
    }
}

export default productList;