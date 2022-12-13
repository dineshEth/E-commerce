import React from 'react'
import { PRODUCTS } from '../../products'
import { Products } from './products'
import './shop.css'

export const Shop = () => {
  return (
    <div className='shop'>
      <div className="shopTitle">
        <h1> DR shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product)=>(
        <Products data={product} />
        ))}
      </div>
    </div>
  )
}
