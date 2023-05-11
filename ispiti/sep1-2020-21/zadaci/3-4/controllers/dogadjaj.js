const model = require('../models/dogadjaj');

async function prikaziPocetnu(req, res, next) {
    try {
        res.render('pocetna.ejs');
    } catch (err) {
        next(err);
    }
}

async function prikaziDogadjaje(req, res, next) {
    try {
        const podaci = req.query;
        const godina = podaci.godina;
        const mesec = podaci.mesec;
        const dan = podaci.dan;

        let poruka = '';
        let status;

        if (godina == '' && mesec == '' && dan == '') {
            poruka = 'Morate navesti godinu, mesec ili dan';
            status = 400;
        } else if (godina != '' && (parseInt(godina) < 1900 || parseInt(godina) > 2100)) {
            poruka = 'Godina mora biti izmedju 1900 i 2100';
            status = 422;
        } else if (mesec != '' && (parseInt(mesec) < 1 || parseInt(mesec) > 12)) {
            poruka = 'Mesec mora biti izmedju 1 i 12';
            status = 422;
        } else if (dan != '' && (parseInt(dan) < 1 || parseInt(dan) > 31)) {
            poruka = 'Dan mora biti izmedju 1 i 31';
            status = 422;
        }

        if (poruka != '') {
            const izuzetak = new Error(poruka);
            izuzetak.status = status;
            throw izuzetak;
        }

        const dogadjaji = await model.dohvatiDogadjaje(godina, mesec, dan);
        res.render('dogadjaji.ejs', { dogadjaji });
    } catch (err) {
        next(err);
    }
}

async function prikaziAzuriranDogadjaj(req, res, next) {
    try {
        const podaci = req.body;
        const naziv = podaci.naziv;
        const godina = podaci.godina;
        const mesec = podaci.mesec;
        const dan = podaci.dan;
        const trajanje = podaci.trajanje;
        const id = podaci.id;

        if (naziv == '' || godina == '' || mesec == '' || dan == '' || trajanje == '' || id == '') {
            const izuzetak = new Error('Niste naveli sve neophodne vrednosti za azuriranje');
            izuzetak.status = 400;
            throw izuzetak;
        }

        const dogadjaj = await model.azurirajDogadjaj(id, naziv, godina, mesec, dan, trajanje);
        res.render('azuriraj-dogadjaj.ejs', { dogadjaj });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    prikaziPocetnu,
    prikaziDogadjaje,
    prikaziAzuriranDogadjaj,
};
