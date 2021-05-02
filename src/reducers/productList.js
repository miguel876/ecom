import { products } from '../products.js';
import { SHOW_PRODUCTS, COUNT_PRODUCTS } from './actionTypes.js';


const productList = (state = [], action) =>{
    switch(action.type){
        case SHOW_PRODUCTS:
            const productList = new Promise((resolve, reject) =>{
                if(products){
                    resolve(products);
                }else{
                    reject("Error on reading the products");
                }
            });

            return productList;
        
        case COUNT_PRODUCTS:
        //Colocar o número produtos que aparecem na primeira página
            return 7;
            
        default:
            return state;
    }
}

export default productList;
