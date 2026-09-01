import React, { useContext } from 'react'
import toast from 'react-hot-toast'
import { FaCheck, FaRegHeart, FaShare } from 'react-icons/fa'
import { IoMdStarHalf } from 'react-icons/io'
import { LiaStarSolid } from 'react-icons/lia'
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Components/context/CartContext'
import { FavoritesContext } from '../../Components/context/FavoritesContext'

const ProductInfo = ({product}) => {
  const  {cartItems,addToCart} = useContext(CartContext);
  const isInCart = cartItems.some(i=>i.id === product.id);
  const  {favoritesItems,addToFavorites,removeFromFavorites} = useContext(FavoritesContext);
  const isInFavorites = favoritesItems.some(i=>i.id === product.id);
const handeleAddToCart = ()=>{
addToCart(product);
toast.success(
<div className='toast_wrapper'>
  <img src={product.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{product.title}</strong>
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
   removeFromFavorites(product.id);
   
toast.error(
<div className='toast_wrapper'>
  <img src={product.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{product.title}</strong>
    removed from Favorites
    <div>
    
   
    </div>
  </div>
</div>
,{duration:3500}
)
  }
  else{
 
addToFavorites(product);
toast.success(
<div className='toast_wrapper'>
  <img src={product.images[0]} alt=""  className='toast_img'/>
  <div className="toast_content">
    <strong>{product.title}</strong>
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
     <div className="details_item">
            <h1 className="name">{product.title}</h1>
         

          <div className="stars">
            { 
              Array.from({ length: Math.floor(product.rating || 0) }).map((_, i) => (
                <LiaStarSolid key={i} /> 
              ))
            }
            <IoMdStarHalf />
          </div>

          <p className="price">$ {product.price}</p>
          <h5>Availability : <span>{product.availabilityStatus}</span></h5>
          <h5>Brand : <span>{product.brand}</span></h5>
          <p className="desc">{product.description}</p>
          <h5 className='stock'>Hurry Up! Only <span>{product.stock}</span> Products left in stock</h5>
          
          <button className={`btn  ${isInCart ? "in_cart":""}`} onClick={()=> handeleAddToCart( )} >
         {isInCart ? (
  <>
    item in cart <FaCheck />
  </>
) : (
  <>
    Add To Cart <TiShoppingCart />
  </>
)}
          </button>

          <div className="icons">
            <button className={`btn_addtofavorites ${isInFavorites ? "in_favorites":""}` }  onClick={()=> handeleAddToFavorites( )} >    <FaRegHeart /> </button>
          
            <span><FaShare /></span>
             </div>
          </div>
  )
}

export default ProductInfo
