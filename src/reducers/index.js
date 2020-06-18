import productList from '../reducers/productList';
import cartList from '../reducers/shopping-cart';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productList,
    cart: cartList
})

export default rootReducer;