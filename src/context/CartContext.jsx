import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const fetchCartItems = async()=> {
        const response = await axios.get('https://682d82ec4fae188947564789.mockapi.io/cart')
        setCartItems(response.data)
    }
    const addToCart = async(product)=> {
        const response = await axios.post('https://682d82ec4fae188947564789.mockapi.io/cart',product )
        setCartItems(prev=> [...prev,response.data ])
    }

    const deleteFromCart = async(productId)=> {
        await axios.delete(`https://682d82ec4fae188947564789.mockapi.io/cart${productId}`)
        setCartItems(prev=> prev.filter(item=> item.id !== productId))
    }
    useEffect(()=> {
fetchCartItems()
    }, [])
  return (
    <CartContext.Provider value={{cartItems, addToCart, deleteFromCart, fetchCartItems}}>{children}</CartContext.Provider>
  )
}

export default CartProvider