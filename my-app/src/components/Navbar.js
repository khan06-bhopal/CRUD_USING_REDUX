import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom";
 const Navbar = () => { 

    return( 
        
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        
        <Link to={"/"} className = "navbar-brand ml-5"> 
         RECT REDUX  CRUD
        </Link>
        
                   
                   </nav>
        
      
        
    )
 }

 export default Navbar