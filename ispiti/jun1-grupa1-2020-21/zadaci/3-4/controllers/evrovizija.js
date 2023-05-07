const model = require('../models/rezultati')

async function dohvatiDrzave(req, res, next) {
    try {
        const drzave = await model.dohvatiDrzaveZaKojePostojeRezultati();
        res.render('drzave.ejs', { drzave });
    } catch (err) {
        next(err);
    }
}

async function prikaziRezultate(req, res, next) {
    try {
        const data = req.body;
        let rez = [];
        let tip = data.ziri;
        if (tip == 'Ziri') {
            rez = await model.dohvatiRezultateZirijaZaDrzavu(data.drzava);
        } else if (tip == 'Publika') {
            rez = await model.dohvatiRezultatePublikeZaDrzavu(data.drzava);
        } else { // if (tip == 'Oba')
            rez = await model.dohvatiRezultateObaZaDrzavu(data.drzava);
        }

        res.render('rezultati.ejs', { drzava: data.drzava, rezultati: rez, tip })
    } catch (err) {
        next(err);
    }
}

module.exports = {
    dohvatiDrzave,
    prikaziRezultate,
};
