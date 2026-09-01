import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageTransition from '../Components/PageTransition';
import Product from '../Components/slideProducts/Product';
import SlideProductLoading from '../Components/slideProducts/SlideProductLoading';
import { p } from 'framer-motion/client';

const SearchResults = () => {

    const [results,setResults]=useState([]);
    const [loading,setLoading]=useState(true);


    const query = new URLSearchParams(useLocation().search).get("query");

console.log(results);

    useEffect(()=>{
const fetchResults = async ()=>{
    try{
        const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
        const data = await res.json();
setResults(data.products || [])
    }catch(err){
        console.error("search error : ",error);
        
    }finally{
        setLoading(false);
    }
}
if(query) fetchResults();
    },[query])
  return (
    <PageTransition key={query}>


  <div className="category_products">
      {loading ? (

            <SlideProductLoading/>
            ): results.length > 0 ?(
                (
        <div className="container">
          <div className="top_slide">
          <h2>
            Results for : {query}
          </h2>
          </div>
          <div className="products">
            {results.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      )
            ):(<div className="container">

<p>not results found</p>

            </div>
            )
            
            }
    </div>
    </PageTransition>
  )
}

export default SearchResults
