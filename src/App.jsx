import BtmHeader from "./Components/header/BtmHeader"
import TopHeader from "./Components/header/TopHeader"
import { BrowserRouter ,Route,Routes, useParams} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductDetails from "./pages/productDetails/ProductDetails"
import Cart from './pages/cart/Cart'
import { Toaster } from "react-hot-toast"
import ScrolToTop from "./Components/ScrolToTop"
import {AnimatePresence} from 'framer-motion'
import CategoryPage from "./pages/categoryPage/CategoryPage"
import SearchResults from "./pages/SearchResults"
import Favorites from "./pages/favorites/Favorites"
function App() {
  return (
   <BrowserRouter>
  
   <>
   <header>
<TopHeader/>
<BtmHeader/>

   </header>
   <Toaster
  position="bottom-right"
  reverseOrder={false}
  toastOptions={
   {style:{
      background:'#e9e9e9',
      borderRadius:'5px',
      padding:'14px'
   }}
  }
/>
<ScrolToTop/>

<AnimatePresence mode="wait">

  <Routes>

<Route path="/" element={<Home/>}/>
<Route path="/products/:id" element={<ProductDetails/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/favorites" element={<Favorites/>}/>
<Route path="/search" element={<SearchResults/>}/>
<Route path="/category/:category" element={<CategoryPage/>}/>


   </Routes>
</AnimatePresence>
 
    </>
     </BrowserRouter>
  )
}

export default App
