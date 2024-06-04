import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetailReducer from './productDetailReducer';


const rootReducer=combineReducers({
    product:productReducer,
    productDetail:productDetailReducer
});

export default rootReducer;