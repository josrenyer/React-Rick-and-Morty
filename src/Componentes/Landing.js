import React from "react";
import "./Landing.css"
import {Link} from "react-router-dom";
import logo from '../img/otro.gif'
import nombre from '../img/nombre.gif'


export default function Landing(){

	return<div className="landing">
		<Link to="/Home"><img className="nombre" src={logo} alt=""/></Link>
		<br/>
		<img className="nombre" src={nombre} alt=""/>
	</div>
}