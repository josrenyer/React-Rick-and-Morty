import React, {useState, useEffect}from "react";
import {Route, Routes} from "react-router-dom";
import Landing from "./Componentes/Landing";
import Home from "./Componentes/Home";
import About from "./Componentes/About";
import "./App.css"
import CardDetail from "./Componentes/CardDetail";
import axios from "axios";



export default function App() {

    const [personajes, setPersonajes]=useState([]);
    const [info, setInfo]=useState({})
    const urlInicial="https://rickandmortyapi.com/api/character";

  async function getApi(url){
    let api= await axios.get(url)
    let data=api.data;
    setPersonajes(data.results)
    setInfo(data.info);
  }


  function siguiente(){
    getApi(info.next)
  }

  function anterior(){
    getApi(info.prev)
  }


  useEffect(()=>{
    getApi(urlInicial);
  },[])

  return <div className="contenedor">
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/Home" element={<Home personajes={personajes} info={info} siguiente={siguiente} anterior={anterior}/>}/>
      <Route exact path="/About" element={<About/>}/>
      <Route exact path="/Personajes/:id" element={<CardDetail/>}/>
    </Routes>
  </div>;
}
