import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import Nav from'./Nav'

import { Link } from 'react-router-dom';
import './header.css'

const BtmHeader = () => {


  return (
    <div className='btm_header'>
      <div className="container">
   <Nav/> 
<div className="sign_register_icon">
<Link to="/"><PiSignInBold/></Link>
<Link to="/"><FaUserPlus/></Link>

</div>

      </div>
    </div>
  )
}

export default BtmHeader
