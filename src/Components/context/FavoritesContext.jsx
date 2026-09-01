import React, { createContext, useState,useEffect } from 'react'
import { children } from 'react';

export const FavoritesContext = createContext();

const FavoritesProvider = ({children}) => {
   const [favoritesItems,setFavoritesItems] = useState(()=>{
    const savedFavorites = localStorage.getItem('favoritesItems') ;
    return savedFavorites ?  JSON.parse(savedFavorites) : [];
   });



   const addToFavorites = (item) =>{
    setFavoritesItems((prevItems)=>[...prevItems,{...item,quantity:1}]);
   }
const removeFromFavorites =(id)=>{
  setFavoritesItems(prevItems => prevItems.filter(item => item.id !== id));
}

     useEffect(()=>{
localStorage.setItem('favoritesItems',JSON.stringify(favoritesItems))  
},[favoritesItems])
  return (
    <FavoritesContext.Provider value={{favoritesItems,addToFavorites,removeFromFavorites}}>

{children}

    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider
