import Nav from "./Nav.js";
import Cards from "./Cards.js";
import "./Home.css";
import Pagination from "./Pagination"


export default function Home({personajes, info, siguiente, anterior}){

	return<div className="contenedor">
	    <Nav/>
	    <Pagination prev={info.prev} next={info.next} siguiente={siguiente} anterior={anterior}/>
	    <Cards personajes={personajes}/>
	    <Pagination prev={info.prev} next={info.next} siguiente={siguiente} anterior={anterior}/>
	</div>
}