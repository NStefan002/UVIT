const express = require("express");

const router = express.Router();

const controller = require('../controllers/olimpijada');

router.get('/rezultati', controller.prikaziRezultate);
router.get('/statistike', controller.prikaziStatistike);

router.get('/', controller.prikaziPocetnuStranicu);

module.exports = router;
