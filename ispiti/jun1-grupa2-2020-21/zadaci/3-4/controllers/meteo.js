const model = require('../models/meteo');

async function dohvatiStatistike(req, res, next) {
    try {
        const gradovi = await model.dohvatiStatistike();
        res.render('statistike.ejs', { gradovi });
    } catch (err) {
        next(err);
    }
}

async function dohvatiDetalje(req, res, next) {
    try {
        const data = req.body;
        const info = await model.dohvatiPodatke(data.grad, data.dugme);
        res.render('detalji.ejs', { info });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    dohvatiStatistike,
    dohvatiDetalje,
};
