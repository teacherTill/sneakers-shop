import React, { useContext } from 'react'
import styles from './ProductCard.module.css'
import { CartContext } from '../../context/CartContext'

const ProductCard = ({product}) => {
    const {addToCart}= useContext(CartContext)

  return (
    <div className={styles.card}>
        <img className={styles.cardImg}  src={product.image} alt={`${product.name}`}/>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceButton}>
            
            <div className={styles.price}>
                <h3>ЦЕНА:</h3>
                <p>{product.price} р.</p>
            </div>
            <button className={styles.buttonAdd} onClick={()=> addToCart(product)}>+</button>
        </div>
    </div>
  )
}

export default ProductCard