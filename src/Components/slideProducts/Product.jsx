import React, { useContext } from 'react'
import { LiaStarSolid } from "react-icons/lia";
import { IoMdStarHalf } from "react-icons/io";
import { FaCartArrowDown,FaShare ,FaRegHeart,FaCheck} from "react-icons/fa";
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import toast from 'react-hot-toast';
import { FavoritesContext } from '../context/FavoritesContext';

const Product = ({item}) => {
const  {cartItems,addToCart} = useContext(CartContext);
const isInCart = cartItems.some(i=>i.id === item.id);

const  {favoritesItems,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
const isInFavorites = favoritesItems.some(i=>i.id === item.id);

const handeleAddToCart = ()=>{
addToCart(item);
toast.success(
<div className='toast_wrapper'>
  <img src={item.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{item.title}</strong>
    added to cart
    <div>
      <Link to="/cart">   <button className='btn'>View Cart</button> </Link>
   
    </div>
  </div>
</div>
,{duration:3500}
)
}

const handeleAddToFavorites = ()=>{

  if(isInFavorites){
   removeFromFavorites(item.id);
   
toast.error(
<div className='toast_wrapper'>
  <img src={item.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{item.title}</strong>
    removed from Favorites
    <div>
    
   
    </div>
  </div>
</div>
,{duration:3500}
)
  }
  else{
 
addToFavorites(item);
toast.success(
<div className='toast_wrapper'>
  <img src={item.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{item.title}</strong>
    added to Favorites
    <div>
      <Link to="/favorites">   <button className='btn'>View Favorites</button> </Link>
   
    </div>
  </div>
</div>
,{duration:3500}
)
}}
  return (
    <div  className={`product  ${isInCart ? "in_cart":""}`}>
    <Link to={`/products/${item.id}`}>
    <span className='status_cart'><FaCheck /> in cart</span>
      <div className="img_product">
         <img src={item.images[0]} alt="" />




      </div>
     <p   className='name_product'>{item.title}</p>
   <div className="stars">
    { 
    Array(Math.floor(item.rating || 0)).fill(0).map((_, i) => (
<LiaStarSolid key={i}/>        ))}
  

<IoMdStarHalf />


   </div>

   <p className="price">$ {item.price}</p>
   </Link>
   <div className="icons">

<span className='btn_addtocart' onClick={()=> handeleAddToCart( )}><FaCartArrowDown /></span>
<span    className={`btn_addtofavorites ${isInFavorites ? "in_favorites":""}` }   onClick={()=> handeleAddToFavorites( )}><FaRegHeart /></span>
<span><FaShare /></span>
   </div>
    </div>
  )
}

export default Product
