import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'
import {CartContext} from '../context/CartContext'
import SearchBox from './SearchBox';
import { FavoritesContext } from '../context/FavoritesContext';
import { FaStore } from "react-icons/fa";
const TopHeader = () => {
  const {cartItems}=useContext(CartContext);
  const {favoritesItems}=useContext(FavoritesContext);

  return (
    <div className='top_header'>
   <div className="container container1">


  <Link to="/" className='logo'><div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <FaStore style={{ fontSize: '28px', color: 'var(--black_bg)' }} />
  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ecommerse </span>
</div></Link>
<SearchBox/>

<div className="header_icons">
  <div className="icon">
<Link to="/favorites">

<FaRegHeart />
<span className="count">{favoritesItems.length}</span>
</Link>
  </div>
  <div className="icon">
<Link to="/cart">
<TiShoppingCart />
<span className="count">{cartItems.length}</span>
</Link>

  </div>

</div>



     </div>

<div className="container2">

<div className='top_headerPart1'>
  <Link to="/" className='logo'><div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <FaStore style={{ fontSize: '28px', color: 'var(--black_bg)' }} />
  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Ecommerse </span>
</div></Link>


<div className="header_icons">
  <div className="icon">
<Link to="/favorites">

<FaRegHeart />
<span className="count">{favoritesItems.length}</span>
</Link>
  </div>
  <div className="icon">
<Link to="/cart">
<TiShoppingCart />
<span className="count">{cartItems.length}</span>
</Link>

  </div>

</div>

</div>
<SearchBox/>



     </div>

    </div>
  )
}

export default TopHeader
