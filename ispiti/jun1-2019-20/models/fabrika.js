const mongoose = require('mongoose')

const shema = mongoose.Shema({
    _id: mongoose.Shema.Types.ObjectId,
    naziv:
    {
        type: String,
        required: true
    },
    drzava:
    {
        type: String,
        required:true
    },
    tipIndustrije:
    {
        type: String,
        required: true
    },
    uPogonu:
    {
        type: Boolean,
        required: true,
        default:false
    }
});

const FabrikaModel = mongoose.model('Fabrika', shema);
