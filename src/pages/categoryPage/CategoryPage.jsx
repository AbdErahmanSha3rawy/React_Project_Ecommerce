import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Components/slideProducts/Product";
import "./categoryPage.css";
import SlideProductLoading from "../../Components/slideProducts/SlideProductLoading";
import PageTransition from "../../Components/PageTransition";
const CategoryPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryProducts(data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category]);
  return (
    <PageTransition key={category}>

  <div className="category_products">
      {loading ? (
        categoryProducts.map((category, index) => (
            <SlideProductLoading key={category} />
        )
      ) ): (
        <div className="container">
          <div className="top_slide">
            <h2>{category} : {categoryProducts.limit}</h2>
          </div>
          <div className="products">
            {categoryProducts.products.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
    </PageTransition>
  
  );
};

export default CategoryPage;
