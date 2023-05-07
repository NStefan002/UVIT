const express = require("express");

const router = express.Router();

const controller = require('../controllers/meteo');

router.post('/detalji', controller.dohvatiDetalje);
router.get('/', controller.dohvatiStatistike);

module.exports = router;
