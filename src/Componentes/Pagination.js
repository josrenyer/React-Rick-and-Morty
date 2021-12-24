import React from "react";
import "./Pagination.css"


export default function Pagination({next, prev, anterior, siguiente}){

	const handelnext=()=>{
		siguiente();
	};

	const handelprev=()=>{
		anterior();
	};

	return <div className="pagination">
		<ul>
		{prev ? (
			<li><button onClick={handelprev}>Anterior</button></li>
		): null}
		{next ? (
			<li><button onClick={handelnext}>Siguiente</button></li>
		) :null}
		</ul>
	</div>

}