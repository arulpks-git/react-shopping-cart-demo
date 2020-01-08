import React from 'react';
import Counter from './Counter'
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
  
    return(
            <nav className="nav-wrapper blue accent-4">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right hide-on-med-and-down">
                       
                        
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