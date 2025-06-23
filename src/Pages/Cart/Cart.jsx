import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartCard from '../../components/CartCard/CartCard'
import styles from './Cart.module.css'

const Cart = () => {
    const {cartItems,  fetchCartItems} = useContext(CartContext)
    const [fullPrice, setFullPrice] = useState(0)

 useEffect(()=> {
fetchCartItems()

    
   
 },[])
     useEffect(() => {
       
            const total = cartItems.reduce((acc, el) => acc + Number(el.price), 0)
            setFullPrice(total)
        
    }, [cartItems]) // Срабатывает при каждом изменении cartItems
  return (
  <div className='container'>
    <h1>Корзина</h1>
    <div className={styles.cartContent}>
        <div className={styles.cartCards} >
                {
                    cartItems && cartItems.map(product=> <CartCard key={product.id} product={product} /> )
                }
            </div>
            <div className={styles.cartNames}>
                {cartItems && cartItems.map(product=> <p key={product.id}>{product.name}</p>)}
                <h3>{fullPrice} р.</h3>
            </div>
    </div>
  </div>
    
  )
}

export default Cart