import React, { useEffect, useState } from 'react'
import axios from 'axios'
import baner from '../../assets/Banner.png'
import ProductCard from '../../components/ProductCard/ProductCard'
import styles from './Main.module.css'

const Main = () => {
    const [products, setProducts] = useState([])
     const fetchProducts = async()=> {
       try{ 
        const response = await axios.get('https://682d82ec4fae188947564789.mockapi.io/products')
       setProducts(response.data)
    }catch(error){
        console.error(error)
    }
     }
    useEffect(()=> {
       fetchProducts()
    }, [])
  return (
    <div className='container' style={{margin:'auto'}}>
        <div style={{margin:'29px auto 59px '}} className='container'><img src={baner} style={{width:'100%'}} alt="" /></div>
        <h2 style={{fontSize:35}}>Товары</h2>
        <div className='container' style={{height:'1px', borderBottom:'2px solid rgba(234, 234, 234, 1)'}}></div>
        <div className={styles.products}>
            {products && products.map(product=> <ProductCard key={product.key} product={product}/> )}
        </div>

    </div>
  )
}

export default Main