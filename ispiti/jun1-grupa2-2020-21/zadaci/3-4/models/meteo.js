const mongoose = require('mongoose');

const meteoShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    grad: {
        type: String,
        required: true
    },
    drzava: {
        type: String,
        required: true
    },
    temperatura: {
        type: Number,
        required: true
    },
    datum: {
        type: Date,
        required: true
    }
}, { collection: 'meteopodaci' });

const meteoModel = mongoose.model('Meteo', meteoShema);

async function dohvatiStatistike() {
    const statistike = await meteoModel.find({}, { _id: false, datum: false }).sort({ grad: 1 }).exec();
    if (statistike.length == 0) {
        return {};
    }

    const gradovi = [];
    let grad = statistike[0].grad;
    let drzava = statistike[0].drzava;
    let min = statistike[0].temperatura;
    let max = min;
    let t = min;
    let br = 1;

    for (const s of statistike) {
        if (grad != s.grad) {
            t /= br;
            gradovi.push({ grad: grad, drzava: drzava, min: min, max: max, prosek: t });

            grad = s.grad;
            drzava = s.drzava;
            min = s.temperatura;
            max = min;
            t = min;
            br = 1;
        } else {
            min = Math.min(min, s.temperatura);
            max = Math.max(max, s.temperatura);
            t += s.temperatura;
            br++;
        }
    }
    // poslednji grad
    t /= br;
    gradovi.push({ grad: grad, drzava: drzava, min: min, max: max, prosek: t });

    gradovi.sort(function(g1, g2) {
        return g2.max - g1.max;
    }); // sortirati opadajuce po maksimalnoj temperaturi

    return gradovi;
}

async function dohvatiPodatke(grad, sort) {
    const poredak = sort == 'opadajuce' ? -1 : 1;
    const info = await meteoModel.find({ grad: grad }).sort({ datum: poredak }).exec();

    return info;
}

module.exports = {
    dohvatiStatistike,
    dohvatiPodatke,
};
