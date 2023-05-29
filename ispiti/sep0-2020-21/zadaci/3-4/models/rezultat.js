const mongoose = require('mongoose');

const shema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sport: {
        type: String,
        required: true
    },
    zlato: {
        type: String,
        required: true
    },
    srebro: {
        type: String,
        required: true
    },
    bronza: {
        type: String,
        required: true
    },
    timski: {
        type: Boolean,
        required: true
    },
    kategorija: {
        type: String,
        required: true
    }
}, { collection: 'rezultati' });

const Rezultat = mongoose.model('Rezultat', shema);

async function dohvatiRezultateZaDrzavu(drzava) {
    const rez = await Rezultat.find({
        $or: [
            { zlato: drzava },
            { srebro: drzava },
            { bronza: drzava }
        ],
    }, { _id: false }).sort({ timski: -1, sport: 1 }).exec();

    const rezultati = [];
    for (const r of rez) {
        let medalja;
        // na engleskom zbog lakseg stilizovanja u rezultati.ejs
        if (r.zlato == drzava) {
            medalja = 'gold';
        } else if (r.srebro == drzava) {
            medalja = 'silver';
        } else {
            medalja = 'rgb(205, 127, 50)';
        }

        // zbog kraceg koda u rezultati.ejs
        let kategorija = r.kategorija == 'm' ? 'Muskarci' : 'Zene';
        let timski = r.timski ? 'Timski' : 'Individualni';

        rezultati.push({
            medalja: medalja,
            sport: r.sport,
            timski: timski,
            kategorija: kategorija
        });
    }

    return rezultati;
}

async function dohvatiStatistike(drzava) {
    const rez = await Rezultat.find({
        $or: [
            { zlato: drzava },
            { srebro: drzava },
            { bronza: drzava }
        ],
    }, { _id: false }).exec();

    let zT = 0, zI = 0, mT = 0, mI = 0;
    for (const r of rez) {
        if (r.kategorija == 'm') {
            if (r.timski) {
                mT++;
            } else {
                mI++;
            }
        } else {
            if (r.timski) {
                zT++;
            } else {
                zI++;
            }
        }
    }

    return { zT, zI, mT, mI };
}

module.exports = {
    dohvatiRezultateZaDrzavu,
    dohvatiStatistike,
};
