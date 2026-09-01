import { li } from 'framer-motion/m';
import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.css'

const SearchBox = () => {

    const [searchTerm,setSearchTerm]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [loading,setLoading]=useState(true);


    const navigate = useNavigate();

    const location = useLocation();


    const handelSubmet =(e)=>{
        e.preventDefault();
        if(searchTerm.trim()){
navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`)

        }
        setSuggestions([])
    }

    useEffect(()=>{
        const fetchSuggestions = async ()=>{
if(!searchTerm.trim()){
        setSuggestions([])
     return
}

            try{
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await res.json();
         setSuggestions(data.products.slice(0,5) || [])
    }catch(err){
        console.error("search error : ",error);
        setSuggestions("")
        
    }finally{
        setLoading(false);
    }
        }
    const debonuce = setTimeout(()=>{
        fetchSuggestions();
    },300)

    return ()=> clearTimeout(debonuce);
    },[searchTerm])

    useEffect(()=>{
        setSuggestions([])

    },[location])
    
  return (
    <div className='SearchBox_container'>
      <form  onSubmit={handelSubmet} className='search_box'>
        <input type="text" name='search' autoComplete='off' id='search' placeholder='search for products' onChange={(e)=>setSearchTerm(e.target.value)} />
        <button type='submet'><FaSearch /></button>
      </form>
      {
        suggestions.length > 0 && (
            <ul className='suggestions'>
            {suggestions.map((item)=>(
<Link to={`/products/${item.id}`}  key={item.id}>       
         <li ><img src={item.images[0]}></img><span>{item.title}</span></li>
         </Link>
))}
            </ul>
        )
      }
    </div>
  )
}

export default SearchBox
