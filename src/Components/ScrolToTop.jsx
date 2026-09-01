import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrolToTop = () => {
    const {pathname}=useLocation();


    useEffect(()=>{
        window.scrollTo({
            top:0
        })
    },[pathname])
  return (
    <div>
      
    </div>
  )
}

export default ScrolToTop
