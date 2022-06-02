const express = require('express');
const router = express.Router();

const main = require('./main');
const decompose = require('./decompose');

//Rota padrão da API
router.use('/', main);

//Rota para realizar a decomposição do número
router.use('/decompose', decompose);

module.exports = router;
