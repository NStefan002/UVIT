const express = require("express");

const router = express.Router();

const controller = require('../controllers/dogadjaj');
const { compile } = require("ejs");

router.post('/dogadjaji/azuriraj', controller.prikaziAzuriranDogadjaj);
router.get('/dogadjaji', controller.prikaziDogadjaje);
router.get('/', controller.prikaziPocetnu);

module.exports = router;
