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
        const info =  await studentModel.dohvatiTekucuStatistikuZaSmer(smer);
        const istorija = await statistikaModel.dohvatiIstorijuStatistikaZaSmer(smer);
        res.render('statistike.ejs', { smer: smer, brStudenata: info.brStudenata, prosek: info.prosek, najistaknutiji: info.najistaknutiji, istorija: istorija });
    } catch (err) {
        next(err);
    }
}

// Za 4. zadatak
async function unesiStatistiku(req, res, next) {
    try {
        let r = req.body;
        let smer = r.smer;
        let brojStudenata = r.broj;
        let prosek = r.prosek;
        let student = r.student;
        let datum = r.datum;
        let imaKomentar = r.imaKomentar == 'on';
        let komentar = r.komentar;
        console.log(r);
        console.log(imaKomentar);

        await statistikaModel.unesiStatistikuZaSmer(smer, brojStudenata, prosek, student, datum, imaKomentar, komentar);
        await prikaziPocetnuStranicu(req, res, next);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnuStranicu,
    prikaziStatistike,
    unesiStatistiku,
};
