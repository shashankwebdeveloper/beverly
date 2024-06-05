
import axios from "axios";

export const FETCH_PRODUCTS_REQUEST='FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS='FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE='FETCH_PRODUCTS_FAILURE';
export const FETCH_PRODUCT_DETAIL_REQUEST = 'FETCH_PRODUCT_DETAIL_REQUEST';
export const FETCH_PRODUCT_DETAIL_SUCCESS = 'FETCH_PRODUCT_DETAIL_SUCCESS';
export const FETCH_PRODUCT_DETAIL_FAILURE = 'FETCH_PRODUCT_DETAIL_FAILURE';


export const  fetchProductsRequest=()=>({
    type:FETCH_PRODUCTS_REQUEST
});


export const fetchProductsSuccess=(products)=>({

    type:FETCH_PRODUCTS_SUCCESS,
    payload:products
});

export const fetchProductsFailure=()=>({
    type:FETCH_PRODUCTS_FAILURE,
    payload:'error'
});

export const fetchProductDetailRequest = () => ({
    type: FETCH_PRODUCT_DETAIL_REQUEST
  });
  
  export const fetchProductDetailSuccess = (product) => ({
    type: FETCH_PRODUCT_DETAIL_SUCCESS,
    payload: product
  });
  
  export const fetchProductDetailFailure = (error) => ({
    type: FETCH_PRODUCT_DETAIL_FAILURE,
    payload: error
  });
export const  fetchProducts=()=>{
    return (dispatch)=>{
        dispatch(fetchProductsRequest());
        axios.get('https://fakestoreapi.com/products')
        .then(response=>{
            const products=response.data;
            dispatch(fetchProductsSuccess(products));

        })
        .catch(error=>{
            const errorMsg=error.message;
            dispatch(fetchProductsFailure("build failed"));
            console.log(errorMsg);

        });
    };

};


export const fetchProductDetail = (id) => {
    return (dispatch) => {
      dispatch(fetchProductDetailRequest());
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => {
          const product = response.data;
          dispatch(fetchProductDetailSuccess(product));
        })
        .catch(error => {
          const errorMsg = error.message;
          dispatch(fetchProductDetailFailure(errorMsg));
        });
    };
  };