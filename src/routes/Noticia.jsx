import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { Link, Outlet } from 'react-router-dom'

function Noticia() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])
	
	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
    <>
    <Link to="/">Página Inicial</Link>
		<h1>{noticia.titulo}</h1>
    <h2>{noticia.autor}</h2>
    <h2>{noticia.conteudo}</h2>
    </>
	)
}

export default Noticia