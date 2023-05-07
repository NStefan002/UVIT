// Za 3. zadatak

const mongoose = require('mongoose');

const studentShema = new mongoose.Schema({
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

const studentModel = new mongoose.model('UpisanStudent', studentShema);

async function dohvatiTekucuStatistikuZaSmer(smer) {
    const studenti = await studentModel.find({ smer: smer, upisani: true }).sort({ prosek: -1 }).exec();
    console.log(studenti);

    return studenti;
}

module.exports = {
    dohvatiTekucuStatistikuZaSmer,
};
