import React from "react";
import Nav from "./Nav"
import {Link} from "react-router-dom"
import "./About.css"


export default function About(){

	return<>
		<Nav/>
		<div className="About">
			<h2>Sobre Mi</h2>
			<br/>
			<p>Hola Mi nombre es José Rangel, soy un programador Junior</p>
			<br/>
			<br/>
			<h2>Esta pagina fue realizada con:</h2>
			<br/>
			<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt=""/>
			<img src="https://img.icons8.com/color/48/000000/css3.png" alt=""/>
			<img src="https://img.icons8.com/color/48/000000/javascript--v1.png" alt=""/>
			<img src="https://img.icons8.com/ultraviolet/48/000000/react--v1.png" alt=""/>
			<br/>
			<br/>
			<h2>Sobre la Pagina</h2>
			<br/>
			<p>Primeramente la pagina cuenta con una landing principal donde muestra un GIF del portal que se usa en la serie de Rick and Morty . Cabe mencionar que la pagina es responsiva para telefonos, table y computadoras.</p>
			<p>Luego pasamos a el Home, donde veremos que hay una Navbar donde muestra un logo que sera un hipervinculo hacia el home y una lista donde dare mis contactos.</p>
			<p>Tambien podemos observar que se esta consumiendo la API de Rick and Morty para traer todos los personajes y poder ubicarlos en cartas, que al momento de hacer un click en la imagen les mostrara infromacion mas detallada del personaje.</p>
			<p>Para terminar tambien podemos ver que se le agrego un paginado para poder ver los demas personajes de la serie ya que la API cuenta con aproximadamente 826 personajes</p>
			<br/>
			<br/>
			<h2>Funcionalidades de la Pagina</h2>
			<br/>
			<ul>
				<li>Routing</li>
				<li>Responsividad</li>
				<li>Paginado</li>
				<li>Consumo de API</li>
			</ul>
		</div>
		<Link to="/Home"><button className="botonDetalle">Atras</button></Link>
	</>
}