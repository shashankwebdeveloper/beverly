import React from 'react';
import './Main.css';
import { useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { fetchProductDetail } from '../actions/productActions';
import Rating from './Rating';
const Main = () => {

  const {id}=useParams();
  const dispatch=useDispatch();
  const productDetails=useSelector(state=>state.productDetail);
  console.log(productDetails.image);
  useEffect(()=>{
    dispatch(fetchProductDetail(id))
  },[dispatch,id]);
  
       
  return (
    <div>
      {/* <div>
        <a href='' className='belowtopBar'>New Arrivals</a>
        <a href='' className='belowtopBar'>Best sellers</a>
        <a href='' className='belowtopBar'>Hype</a>
        <a href='' className='belowtopBar'>Footwear</a>
        <a href='' className='belowtopBar'>Men</a>
        <a href='' className='belowtopBar'>Women</a>
        <a href='' className='belowtopBar'>Kids</a>
        <a href='' className='belowtopBar'>Brands</a>
        <a href='' className='belowtopBar'>Apparel</a>
        <a href='' className='belowtopBar'>Sale</a>
        <a href='' className='belowtopBar'>Gifts</a>
        <a href='' className='belowtopBar'>Sale</a>
        <a href='' className='belowtopBar'>Outlet</a>

      </div>
 */}


        
    

<div className='row shoesouter'>
    <div className='col' style={{width:"50%"}}>
<div className='shoesfirst'>
        <img className='shoes col-12'   src={productDetails.product.image} alt="shoe1" />
        </div>
       <div className='shoessecond'>
        <img className='col-6 col-md-4 ' src="https://m.media-amazon.com/images/I/71dLgmsa-wL._SY695_.jpg" alt="shoe2" />
        <img className='col-6 col-md-4 shoes'  src="https://m.media-amazon.com/images/I/71HAgCe1iLL._SY695_.jpg" alt="shoe3" />
        <img className='col-6 col-md-4 shoes' src="https://m.media-amazon.com/images/I/71GjxNzeNAL._SY695_.jpg" alt="shoe4" />

          </div>
    </div>
    <div className='col' style={{width:"50%"}}>
        <p className='productbrand'>Nike</p>
        <div>
            <Rating currentRating={productDetails.rating} />
        </div>
        <h1>{productDetails.product.title}<br/> 270 "OCEAN<br/> BLISS"</h1>
        <p><span className='productprice'>{productDetails.product.price}</span><sup className='previousprice'>$415</sup><span className='discountprice'>-40%</span></p>

        <div>
            <p className='sizechart'>Size chart</p>
            <div class="dropdown mt-3 mb-3">
  <button className="btn btn-secondary dropdown-toggle bg-white text-black w-50 btn-lg d-flex justify-content-between align-items-center fs-6"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Size
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<div class="dropdown mt-2 mb-2 ">
  <button class="btn btn-secondary dropdown-toggle bg-white text-black w-50 btn-lg d-flex justify-content-between align-items-center fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Color
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>

        <div>
            <h6>Available options:</h6>
            <div className='toorder'>
                <button className='btn btn-dark'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z"/>
</svg>
</button>
                <p>To order</p>
                <h6 className='text-black '><b>{productDetails.product.price}</b></h6>
            </div>
            <div className='instock'>
              <button className='btn btn-secondary'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg>
              </button>
                <p>To order</p>
                <h6>{productDetails.product.price}</h6>
            </div>
        </div>
        <button className='buyoneclickbtn'>Buy one click{id}</button><br/>
        <button className='addtocartbtn'>Add to cart</button>
    </div>
    </div>


    </div>

    
  )
}

export default Main;
