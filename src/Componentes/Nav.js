import React, {useState} from "react";
import Logo from "../img/logo1.png"
import "./Nav.css";
import {Link} from "react-router-dom";


export default function Nav(){

	const [open, setOpen]=useState(false)


	return<nav className="navbar">
		<div className="logo">
      		<Link to="/Home"><img src={Logo} alt=""/></Link>
      	</div>
      	<div className="menu" id={open ? "visible" : ""}>
      	<ul> 
       		<Link to="/About"><li><img src="https://img.icons8.com/color/48/000000/about.png" alt=""/></li></Link>
       		<a href="https://github.com/josrenyer" target="_blank" rel="noopener noreferrer"><li><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt=""/></li></a>
       		<a href="https://www.linkedin.com/in/jl-rangel-fullstackdeveloper/" target="_blank" rel="noopener noreferrer"><li><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt=""/></li></a>
      	</ul>
      	</div>
      	<div className="icono">
      		<img  src="https://img.icons8.com/fluency/48/000000/menu--v1.png" alt="" onClick={()=>setOpen(!open)}/>
      	</div>
   </nav>
}