const mongoose = require('mongoose')

const rezultatiShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    drzavaKojaGlasa: {
        type: String,
        required: true
    },
    drzavaZaKojuSeGlasa: {
        type: String,
        required: true
    },
    ziri: {
        type: Boolean,
        required: true
    },
    poeni: {
        type: Number,
        required: true
    }
}, { collection: 'rezultati' });

const rezultatiModel = mongoose.model('Rezultati', rezultatiShema);

async function dohvatiDrzaveZaKojePostojeRezultati() {
    const dbRezultati = await rezultatiModel.find({}, { drzavaZaKojuSeGlasa: true, _id: false }).sort({ drzavaZaKojuSeGlasa: 1 }).exec();

    const drzave = [];
    for (const d of dbRezultati) {
        if (drzave.length == 0 || drzave[drzave.length - 1] != d.drzavaZaKojuSeGlasa) {
            drzave.push(d.drzavaZaKojuSeGlasa);
        }
    }

    return drzave;
}

async function dohvatiRezultateZirijaZaDrzavu(drzava) {
    return await rezultatiModel.find({ drzavaZaKojuSeGlasa: drzava, ziri: true }).sort({ poeni: -1 }).exec();
}

async function dohvatiRezultatePublikeZaDrzavu(drzava) {
    return await rezultatiModel.find({ drzavaZaKojuSeGlasa: drzava, ziri: false }).sort({ poeni: -1 }).exec();
}

async function dohvatiRezultateObaZaDrzavu(drzava) {
    return await rezultatiModel.find({ drzavaZaKojuSeGlasa: drzava }).sort({ poeni: -1 }).exec();
}

module.exports = {
    dohvatiDrzaveZaKojePostojeRezultati,
    dohvatiRezultateZirijaZaDrzavu,
    dohvatiRezultatePublikeZaDrzavu,
    dohvatiRezultateObaZaDrzavu,
};
