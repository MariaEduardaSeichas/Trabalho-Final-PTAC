import axios from 'axios'

const api = axios.create({
	baseURL: 'https://meuapp-1.mariaseichas.repl.co'
})

export default api