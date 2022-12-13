import React, { useContext} from 'react'
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shopContext'
import { CartItems } from './cartItems'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItem,getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate =useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product)=>{
          if(cartItem[product.id]!==0){
            return <CartItems data={product} />
          }
        })}
      </div>
      <div className="checkout">
        {totalAmount  > 0 ?
        (<div><p>Subtotal : $ {totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button> </div>) :
        <h1>Your Cart is Empty</h1>
        } 
      </div>
    </div>
  )
}

export default Cart