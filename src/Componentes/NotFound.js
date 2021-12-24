import React from "react";
import logo from '../img/otro.gif'
import {Link} from "react-router-dom";


export default function NotFound(){


  return(<>
  	<div className="landing">
			<h1>Peligro Dimensión 404 Not Found</h1>
			<img className="nombre" src={logo} alt=""/>
			<Link to="/Home"><button className="botonDetalle">Volver</button></Link>
		</div>
  	</>
  )

}