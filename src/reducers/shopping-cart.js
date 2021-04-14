import { ADD_CART, SHOW_CART, REMOVE_CART, DELETE_CART } from './actionTypes.js';

let initialState = {
    products: []
}

const cartList = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CART:
            let cartProduct = state.products.length !== 0 ? 
                state.products.map((prods) => {
                    if(prods !== action.product) state.products.push(action.product)
                })  
                : state.products.push(action.product)

            return {...state, cartProduct};

        case SHOW_CART:
            return state;

        case REMOVE_CART:
            return {...state,
                    products: state.products.filter( prod => prod.id !== action.product_id)
            };

        default:
            return state;
    }

}

export default cartList;