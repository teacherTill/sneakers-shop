import React, { useContext } from 'react'
import basket from '../../assets/basket.png'
import styles from './CartCard.module.css'
import { CartContext } from '../../context/CartContext'

const CartCard = ({product}) => {
    const {deleteFromCart} = useContext(CartContext)
  return (
        <div className={styles.card}>
        <img className={styles.cardImg}  src={product.image} alt={`${product.name}`}/>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceButton}>
            
            <div className={styles.price}>
                <p>ЦЕНА:</p>
                <p>{product.price} р.</p>
            </div>
            <button onClick={()=>deleteFromCart(product.id) } ><img src={basket} alt="" /></button>
        </div>
    </div>
  )
}

export default CartCard