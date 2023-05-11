const mongoose = require('mongoose');

const shema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: {
        type: String,
        required: true
    },
    godina: {
        type: Number,
        required: true
    },
    mesec: {
        type: Number,
        required: true
    },
    dan: {
        type: Number,
        required: true
    },
    trajanje: {
        type: Number,
        required: true
    },
    predavaci: {
        type: [String],
        required: true
    }
}, { collection: 'dogadjaji' });

const Dogadjaj = mongoose.model('Dogadjaj', shema);

async function dohvatiDogadjaje(godina, mesec, dan) {
    godina = godina == '' ? { $ne: godina } : godina;
    mesec = mesec == '' ? { $ne: mesec } : mesec;
    dan = dan == '' ? { $ne: dan } : dan;
    const dogadjaji = await Dogadjaj.find({ godina: godina, mesec: mesec, dan: dan }).sort({ godina: 1, mesec: 1, dan: 1 }).exec();
    return dogadjaji;
}

async function azurirajDogadjaj(id, naziv, godina, mesec, dan, trajanje) {
    const stariDogadjaj = await Dogadjaj.find({ _id: id }).exec();
    const predavaci = stariDogadjaj[0].predavaci;
    const noviDogadjaj = new Dogadjaj({
        _id: id,
        naziv: naziv,
        godina: godina,
        mesec: mesec,
        dan: dan,
        trajanje: trajanje,
        predavaci: predavaci
    })

    await Dogadjaj.updateOne({ _id: id }, noviDogadjaj);

    const azuriraniDogadjaj = await Dogadjaj.find({ _id: id }, { predavaci: false }).exec();
    return azuriraniDogadjaj[0]; // jer find vraca niz
}

module.exports = {
    dohvatiDogadjaje,
    azurirajDogadjaj,
};
