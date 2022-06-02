const express = require('express');
const router = express.Router();

const main = require('./main');

//Rota padrão da API
router.use('/', main);

module.exports = router;
