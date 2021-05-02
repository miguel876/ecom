import productList from '../reducers/productList';
import cartList from '../reducers/shopping-cart';
import headerState from '../reducers/header-state';
import imageLoadingState from '../reducers/image-loading';
import loadedState from '../reducers/loadingState'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    products: productList,
    cart: cartList,
    header: headerState,
    images: imageLoadingState,
    loading: loadedState,
})

export default rootReducer;