import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchProductDetail, fetchProducts } from '../actions/productActions';
import './ProductPage.css';
const ProductsPage = () => {
  const dispatch=useDispatch();
  const productState=useSelector(state=>state.product);
  const navigate=useNavigate();
  const handleProductDetails=(id)=>{
    console.log(id+"some");
    dispatch(fetchProductDetail(id));
     navigate(`/products/${id}`);
  
    }
  useEffect(()=>{
    dispatch(fetchProducts());
  },[dispatch]);


  return (

    <div>
      {productState.loading ? (
        <h2>Loading...</h2>
      ) : productState.error ? (
        <h2>{productState.error}</h2>
      ) : (
        <div className='productslistouter'>
          <h2>Products</h2>
          <div className='productslist'>
            {productState.products.map(product => (
             <div key={product.id} className="card productcard" onClick={()=>{handleProductDetails(product.id)}}>
             <img src={product.image} width="18rem" class="card-img-top" alt="..."/>
             <div className="card-body productbody">
               <p className="card-text airjordhan">{product.title}</p>
               <h7 className="description">{product.description}</h7>
               <h6>{product.price}</h6>
             </div>
           </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductsPage;
