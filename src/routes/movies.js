const express = requiere('express')
const movies_routes = express.Router()

/*Crear uan nueva movies*/
movies_routes.post('/movie',(req, res)=>{})
/*Listar todas las movies existentes*/
movies_routes.get('/movies',(req, res)=>{})
/*Consultar una movies en especifico*/
movies_routes.get('/movies/:idMovies',(req, res)=>{})
/*Actualizar una movies es especifico*/
movies_routes.put('/movies/:idMovies',(req, res)=>{})
/*Eliminar una movies en especifico */
movies_routes.delete('/movies/:idMovies',(req, res)=>{})

module.exports = movies_routes