import React, { useContext } from 'react'
import './shop.css'
import {ShopContext }from '../../context/shopContext';



export const Products = (props) => {
     const {id,productName,price, productImage} = props.data;
     const {cartItem,addToCart}=useContext(ShopContext);
     const cartItemAmount = cartItem[id];
  return ( 
    <div className='product'>
     <img src={productImage} alt={productName} />
     <div className='discription'>
          <p><b>{productName}</b></p>
          <p>$ {price}</p>
     </div>
     <button  className='addToCartBttn' onClick={()=>addToCart(id)}>Add to Cart 
     {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
    </div>
  )
}
