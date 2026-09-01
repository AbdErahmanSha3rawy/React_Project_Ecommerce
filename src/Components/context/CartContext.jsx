import React, { createContext, useState,useEffect } from 'react'
import { children } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
   const [cartItems,setCartItems] = useState(()=>{
    const savedCart = localStorage.getItem('cartItems') ;
    return savedCart ?  JSON.parse(savedCart) : [];
   });

  const increaseQuantity = (id) => {
  setCartItems(prevItems => 
    prevItems.map(item => 
      item.id === id 
        ? { ...item, quantity: (item.quantity || 1) + 1 } 
        : item
    )
  );
};
const decreaseQuantity = (id) => {
  setCartItems(prevItems => 
    prevItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
  );
};


   const addToCart = (item) =>{
    setCartItems((prevItems)=>[...prevItems,{...item,quantity:1}])
   }
const removeFromCart =(id)=>{
  setCartItems(prevItems => prevItems.filter(item => item.id !== id))
}

     useEffect(()=>{
localStorage.setItem('cartItems',JSON.stringify(cartItems))  
},[cartItems])
  return (
    <CartContext.Provider value={{cartItems,addToCart,increaseQuantity,decreaseQuantity,removeFromCart}}>

{children}

    </CartContext.Provider>
  )
}

export default CartProvider
