import React from "react";
import Card from "./Card.js"
import "./Cards.css"


export default function Cards({personajes}) {

  return <div className="cards">
        {personajes.map(e=><Card
          key={e.id}
          id={e.id}
          imagen={e.image}
          nombre={e.name}
          especie={e.species}
          />)}
  </div>;
}