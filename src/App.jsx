import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import api from './services/api'
import CardNoticia from './components/CardNoticia'
import Menu from './components/Menu'
import './App.css';

function App() {
	const [noticias, setNoticias] = useState([])

	useEffect(() => {
		api
			.get('/noticias')
			.then(response => {
				setNoticias(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<>
			<Menu />
			<main>
				{
					noticias.map(noticia => {
						return (

							<div key={noticia._id}>
								<CardNoticia titulo={noticia.titulo} autor={noticia.autor} idNoticia={noticia._id} />
							</div>
						)
					})
				}
			</main>
			<Outlet />
		</>
	);
}

export default App;

