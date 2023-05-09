// Za 3. zadatak

const mongoose = require('mongoose');

const studentShema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    smer: {
        type: String,
        required: true
    },
    imePrezime: {
        type: String,
        required: true
    },
    prosek: {
        type: Number,
        required: true
    },
    upisani: {
        type: Boolean,
        required: true
    }
}, { collection: 'upisaniStudenti' });

const studentModel = mongoose.model('studentModel', studentShema);

async function dohvatiTekucuStatistikuZaSmer(smer) {
    const studenti = await studentModel.find({ smer: smer, upisani: true }, { _id: false, smer: false, upisani: false }).sort({ prosek: -1 }).exec();
    if (studenti.length == 0) {
        return { brStudenata: 0, prosek: 0, najistaknutiji: "" };
    }

    let brStudenata = studenti.length;
    let najistaknutiji = studenti[0].imePrezime;

    let prosek = 0;
    for (const s of studenti) {
        prosek += s.prosek;
    }
    prosek /= brStudenata;

    return { brStudenata, prosek, najistaknutiji };
}

module.exports = {
    dohvatiTekucuStatistikuZaSmer,
};
