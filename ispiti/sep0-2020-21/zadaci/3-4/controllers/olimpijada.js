const model = require('../models/rezultat');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        res.render('pocetna.ejs');
    } catch (err) {
        next(err);
    }
}

async function prikaziRezultate(req, res, next) {
    try {
        const drzava = req.query.drzava;
        const rezultati = await model.dohvatiRezultateZaDrzavu(drzava);
        res.render('rezultati.ejs', { rezultati, drzava });
    } catch (err) {
        next(err);
    }
}

async function prikaziStatistike(req, res, next) {
    try {
        const drzava = req.query.drzava;
        const statistike = await model.dohvatiStatistike(drzava);
        res.render('statistike.ejs', { statistike, drzava });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziStatistike,
    prikaziRezultate
};
