const express = require("express");

const router = express.Router();

const kontroler = require('../controllers/statistike');

router.get('/prikazi-statistike', kontroler.prikaziStatistike);
router.post('/unesi-statistiku', kontroler.unesiStatistiku);
router.get('/', kontroler.prikaziPocetnuStranicu);

module.exports = router;
