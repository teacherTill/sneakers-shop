import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from '../../components/CartCard/CartCard'

const Cart = () => {
    const {cartItems} = useContext(CartContext)


  return (
  <>
  <h1>Корзина</h1>
  <div>
    {
        cartItems.length>0 && cartItems.map(product=> <CartCard product={product} /> )
    }
  </div>

  </>
    
  )
}

export default Cart