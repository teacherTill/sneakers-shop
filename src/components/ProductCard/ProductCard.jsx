import React from 'react'
import styles from './ProductCard.module.css'

const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
        <img className={styles.cardImg}  src={product.image} alt={`${product.name}`}/>
        <h3 className={styles.title}>{product.name}</h3>
        <div className={styles.priceButton}>
            
            <div className={styles.price}>
                <p>ЦЕНА:</p>
                <p>{product.price} р.</p>
            </div>
            <button>+</button>
        </div>
    </div>
  )
}

export default ProductCard