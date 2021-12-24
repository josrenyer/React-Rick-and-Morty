import React from "react";
import "./Card.css"
import {Link} from "react-router-dom";


export default function Card({imagen, nombre, especie, id}) {

  return <div className="card">
        <Link to={`/Personajes/${id}`}>
        <img className="imagen-card" src={imagen} alt=""/>
        </Link>
        <h2>{nombre}</h2>
        <p>Epecie: {especie}</p>
  </div>;
}