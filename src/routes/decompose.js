const express = require('express');
const router = express.Router();
const decomposeController = require('../controllers/decomposeController')

router.get('/:number', decomposeController.get);

module.exports = router;
