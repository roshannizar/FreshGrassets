import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import ProductsReducer from './productsReducer';

export default combineReducers({
    auth: AuthReducer,
    product: ProductsReducer
});