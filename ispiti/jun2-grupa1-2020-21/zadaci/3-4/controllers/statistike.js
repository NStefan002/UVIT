// Za 3. zadatak

const studentModel = require('../models/upisanStudent');
const statistikaModel = require('../models/statistika');

async function prikaziPocetnuStranicu(req, res, next) {
    try {
        res.render('pocetna.ejs');
    } catch (err) {
        next(err);
    }
}

// Za 3. zadatak
async function prikaziStatistike(req, res, next) {
    try {
        const smer = req.query.smer;
        console.log(smer);
        const data =  await studentModel.dohvatiTekucuStatistikuZaSmer(smer);
        res.render('statistike.ejs', { data });
    } catch (err) {
        next(err);
    }
}

// Za 4. zadatak
async function unesiStatistiku(req, res, next) {
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziStatistike,
    unesiStatistiku,
};
