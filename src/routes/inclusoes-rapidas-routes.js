const express = require('express')
const routes = express.Router()

const InclusoesRapidasController = require('../controllers/inclusoes-rapidas-controller')

routes.post('/animal/:id_propriedade/novo', InclusoesRapidasController.cadastrarAnimal)
routes.post('/parto/:id_propriedade/novo', InclusoesRapidasController.cadastrarPartos)

module.exports = routes