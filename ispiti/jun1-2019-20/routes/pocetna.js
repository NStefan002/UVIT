const express = require('express');

const kontrolerPocetna = require('../controllers/pocetna');
const router = express.Router();

router.get('/', kontrolerPocetna.prikaziPocetnu);


module.exports = router;
