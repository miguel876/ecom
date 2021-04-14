import productList from '../reducers/productList';
import cartList from '../reducers/shopping-cart';
import { combineReducers } from 'redux';
import headerState from '../reducers/header-state';

const rootReducer = combineReducers({
    products: productList,
    cart: cartList,
    header: headerState
})

export default rootReducer;