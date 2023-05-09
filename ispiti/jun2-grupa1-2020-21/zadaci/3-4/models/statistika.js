// Za 3. zadatak

const mongoose = require('mongoose');

const statistikaShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    smer: {
        type: String,
        required: true
    },
    brojStudenata: {
        type: Number,
        required: true
    },
    prosek: {
        type: Number,
        required: true
    },
    student: {
        type: String,
        required: true
    },
    datum: {
        type: Date,
        required: true
    },
    imaKomentar: {
        type: Boolean,
        required: true
    },
    komentar: {
        type: String,
        required: true
    }
}, { collection: 'statistike' })

const statistikaModel = mongoose.model('Statistika', statistikaShema);

async function dohvatiIstorijuStatistikaZaSmer(smer) {
    const statistike = await statistikaModel.find({ smer: smer }, { _id: false, smer: false }).exec();

    return statistike;
}

// Za 4. zadatak
async function unesiStatistikuZaSmer(smer, brojStudenata, prosek, student, datum, imaKomentar, komentar) {
    const novaStatistika = new statistikaModel({
        _id: new mongoose.Types.ObjectId(),
        smer: smer,
        brojStudenata: brojStudenata,
        prosek: prosek,
        student: student,
        datum: datum,
        imaKomentar: imaKomentar,
        komentar: komentar
    });

    await novaStatistika.save();

    const test = await statistikaModel.find({}).exec();
    console.log(test);
}

module.exports = {
    dohvatiIstorijuStatistikaZaSmer,
    unesiStatistikuZaSmer,
};
