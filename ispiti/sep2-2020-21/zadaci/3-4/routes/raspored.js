const express = require("express");

const kontroler = require("../controllers/raspored");

const router = express.Router();

router.post('/raspored/obrisi', kontroler.obrisiCas);
router.get('/raspored', kontroler.prikaziRaspored);
router.get('/', kontroler.prikaziPocetnuStranicu);

module.exports = router;
