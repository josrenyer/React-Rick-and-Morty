import React,{useState, useEffect} from "react";
import Nav from "./Nav";
import {useParams, Link} from "react-router-dom"
import "./CardDetail.css"
import axios from "axios";


export default function CardDetail(){

	let {id}=useParams();
	const [detalle,setDetalle]=useState([]);
	let urlInicial=`https://rickandmortyapi.com/api/character/${id}`;
	const numero=parseInt(id);

  async function getApi(url){
    let apidetalle= await axios.get(url)
    let datadetalle=apidetalle.data;
    setDetalle(datadetalle)
  }

	useEffect(()=>{
    	getApi(urlInicial);
  	},[])

	if(numero !== NaN && numero > 0 && numero <827){
  	return(<>

		<Nav/>
		<div className="CardDetalle">
		<h1>{detalle.name}</h1>
		<img src={detalle.image} alt=""/>
		<p><b>Status:</b> {detalle.status}</p>
		<p><b>Especie:</b> {detalle.species}</p>
		<p><b>Genero:</b> {detalle.gender}</p>
		{detalle.origin ? (<p><b>Origen: </b>{detalle.origin.name}</p>
		): (<p><b>Localizacion:</b>No encontrada</p>) }
		{detalle.location ? (<p><b>Localizacion: </b>{detalle.location.name}</p>
		): (<p><b>Localizacion:</b>No encontrada</p>) }
		<p><b>Creado:</b> {detalle.created}</p>
		</div>
		<Link to="/Home"><button className="botonDetalle">Atras</button></Link>
	</>
	)
	}else{
		return(<>
		<Nav/>
		<div className="CardDetalle">
		<h1>Por favor ingrese un id mayor de 0 y menor de 827, no se permiten nombres</h1>
		</div>
		<Link to="/Home"><button className="botonDetalle">Atras</button></Link>
	</>
	)
	}
}