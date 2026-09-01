import React, { useEffect, useState } from 'react'
import HeroSlider from '../../Components/HeroSlider'
import SlideProducts from '../../Components/slideProducts/SlideProducts'
import SlideProductLoading from '../../Components/slideProducts/SlideProductLoading'
import PageTransition from '../../Components/PageTransition'

const categories =[
  "smartphones",
  "mobile-accessories",
  "tablets",
  "laptops",
  "sunglasses",
  "sports-accessories",
  "vehicle",
  "womens-shoes",
  "womens-watches",
  "mens-shirts"
]

const Home = () => {
const [products,setProducts]=useState({});
const [loading,setLoading]=useState(true);


useEffect(()=>{ 
const fetchProducts = async ()=>{
try{
  const results = await Promise.all(
    categories.map(async (category)=>{
      const res = await fetch(`https://dummyjson.com/products/category/${category}`);
      const data = await res.json();
      return {[category]:data.products}
    })
  )
const productsData = Object.assign({},...results);
console.log("Fetched Products Data:", productsData);
setProducts(productsData)

}catch(err){
  console.error(`error : ${err}`)
}finally{
  setLoading(false)
}


}
fetchProducts();
},[])
  return (
   <PageTransition>
     <div>
      <HeroSlider/>

{
  loading ? (

   categories.map((category,index)=>{
return(   <SlideProductLoading key={index} />
  )

  })
  
  ):(


categories.map((category,index)=>{
return(<SlideProducts key={index} title={category.replace("-"," ")} data={products[category]} />
  )

  })
  )
}

    </div>
   </PageTransition>
  )
}

export default Home
