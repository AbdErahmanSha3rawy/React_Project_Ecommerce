import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartProvider from './Components/context/CartContext.jsx' 
import FavoritesProvider from './Components/context/FavoritesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider >
    <FavoritesProvider >

    <App />
</FavoritesProvider>
    </CartProvider>
  </React.StrictMode>,
)