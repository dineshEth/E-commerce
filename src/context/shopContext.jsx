import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../products';


export const ShopContext = createContext(null);
const getDefaultCart = () =>{
     let cart = {};
     for(let i=1; i<PRODUCTS.length+1; i++){
          cart[i]=0;
     }
     return cart;
}

const ShopContextProvider = (props) => {
     const [cartItem,setCartItem] =useState(getDefaultCart());
     const addToCart = (itemId )=>{
          setCartItem((prev )=>({...prev,[itemId]: prev[itemId]+1}));
     };
      const removeFromCart = (itemId )=>{
          setCartItem((prev )=>({...prev,[itemId]: prev[itemId]-1}));
     };
     const updateCartItem = (newAmount, itemId) =>{
          setCartItem((prev)=>({...prev, [itemId] : newAmount}))
     }
     const getTotalCartAmount = ()=>{
          let totalAmount =0;
          for(const item in cartItem){
               if(cartItem[item] > 0){
                    let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                    totalAmount += cartItem[item]* itemInfo.price;
               }
          }
          return totalAmount;
     }
     const contextValue = {cartItem,addToCart,removeFromCart,updateCartItem, getTotalCartAmount}
     
  return (
    <ShopContext.Provider value={contextValue}>
     {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider