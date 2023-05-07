const express = require("express");

const router = express.Router();

const controller = require('../controllers/evrovizija')

router.get('/drzave', controller.dohvatiDrzave)
router.post('/rezultati', controller.prikaziRezultate)

module.exports = router;
