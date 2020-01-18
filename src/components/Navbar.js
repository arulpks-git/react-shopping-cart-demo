import React from 'react';
import Counter from './Counter';
import { Link } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";


 const Navbar = ()=>{
  
    return(
        <nav className="nav-wrapper blue accent-4">
        <div className="">
                    <Link to="/" className="brand-logo left"> <i className="material-icons yellow-text">start</i></Link>
                    
                    <ul className="right">
                       
                        <li  style={{"lineHeight":"31px"}}>
                             <SearchComponent/>
                        </li>
                        <li><Link to="/cart" className="notification">
                          
                            <i className="material-icons">shopping_cart</i>
                            <Counter></Counter>
                             
                         
                            </Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;