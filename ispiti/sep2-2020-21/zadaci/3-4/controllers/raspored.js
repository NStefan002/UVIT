// 3. zadatak

const model = require('../models/casovi');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        res.render('pocetna.ejs');
    } catch (err) {
        next(err);
    }
}

// 3. zadatak
async function prikaziRaspored(req, res, next) {
    try {
        const grupa = req.query.grupa;
        const dani = await model.dohvatiCasoveZaGrupu(grupa);
        res.render('raspored.ejs', { dani: dani, grupa: grupa });
    } catch (err) {
        next(err);
    }
}

// 4. zadatak
async function obrisiCas(req, res, next) {
    try {
        const id = req.body.id;
        const grupa = req.body.grupa;

        await model.obrisiCas(id);

        const dani = await model.dohvatiCasoveZaGrupu(grupa);
        res.render('raspored.ejs', { dani: dani, grupa: grupa });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziRaspored,
    obrisiCas
};
