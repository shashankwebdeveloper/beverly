import {
    FETCH_PRODUCT_DETAIL_REQUEST,
    FETCH_PRODUCT_DETAIL_SUCCESS,
    FETCH_PRODUCT_DETAIL_FAILURE
} from '../actions/productActions';

const initialState={
    
        loading:false,
        product:{},
        error:''
    
};

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCT_DETAIL_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_PRODUCT_DETAIL_SUCCESS:
        return {
          loading: false,
          product: action.payload,
          error: ''
        };
      case FETCH_PRODUCT_DETAIL_FAILURE:
        return {
          loading: false,
          product: {},
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default productDetailReducer;