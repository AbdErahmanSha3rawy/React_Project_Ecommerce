import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import SlideProducts from '../../Components/slideProducts/SlideProducts';
import SlideProductLoading from '../../Components/slideProducts/SlideProductLoading'
import './ProductDetails.css'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'


import ProductDetailsLoading from './ProductDetailsLoading';
import PageTransition from '../../Components/PageTransition';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  // جلب بيانات المنتج الأساسي
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  // جلب المنتجات المرتبطة بناءً على التصنيف
  useEffect(() => {
    if (!product?.category) return;

    const fetchRelated = async () => {
      try {
        setLoadingRelatedProducts(true);
        const res = await fetch(`https://dummyjson.com/products/category/${product.category}`);
        const data = await res.json();
        setRelatedProducts(data.products);
        setLoadingRelatedProducts(false);
      } catch (error) {
        console.error(error);
        setLoadingRelatedProducts(false);
      }
    };

    fetchRelated();
  }, [product?.category]);

  if (!product) return <p>product not found</p>;

  return (
   <PageTransition key={id}>


    <div> 
      {
        loading ? (
 <ProductDetailsLoading/>
        ) : (
            <div className='item_details'>
        <div className="container">
        
<ProductImages product={product}/>
        <ProductInfo  product={product}/>
        </div>
      </div>
        )
      }
   

      {
        loadingRelatedProducts ? (
          <SlideProductLoading />
        ) : (
          <SlideProducts 
            title={product.category.replace("-"," ")} 
            data={relatedProducts} 
            discription={`${product.description}`} 
          />
        )
      }
    </div>



   </PageTransition>

  )
}

export default ProductDetails;