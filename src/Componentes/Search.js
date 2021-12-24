import React from "react";
import Lupa from "../img/lupa.png";
import "./Search.css"


export default function Search(){
	return<form className="buscar">
            <input type="text" placeholder="Personajes"/>
            <img className="lupa" alt="" src={Lupa}/>
    </form>
}



