import React, { useContext } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import PageTransition from '../../Components/PageTransition';
import { FavoritesContext } from '../../Components/context/FavoritesContext';
import SlideProductLoading from '../../Components/slideProducts/SlideProductLoading';
import Product from '../../Components/slideProducts/Product';

const Favorites = () => {
  const { favoritesItems } = useContext(FavoritesContext);

  if (!favoritesItems) {
    return (
      <PageTransition>
        <div className="favorites_products">
          <div className="container">
            <div className="products">
              {[...Array(4)].map((_, index) => (
                <SlideProductLoading key={index} />
              ))}
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
        <h2>Favorites :</h2>
      <div className="favorites_products">
        <div className="container">
          <div className="products">
            {favoritesItems.length > 0 ? (
              favoritesItems.map((item, i) => (
                <Product item={item} key={item.id || i} />
              ))
            ) : (
              <p>Your Favorites are Empty</p>
            )}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Favorites;