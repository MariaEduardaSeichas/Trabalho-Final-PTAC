import React from 'react'
import { Link } from 'react-router-dom';
import './CardNoticia.css'

function CardNoticia(props) {
	return (
		<div className="cardNoticia">
			<Link to={props.idNoticia}>
				<h2 className="cardH2">{props.titulo}</h2>
			</Link>
			<span>{props.autor}</span>
  
		</div>
	)
}

export default CardNoticia