module.exports.prikaziPocetnu = function (req, res, next) {
    try {
        res.render('pocetna.ejs');
    } catch (err) {
        next(err);
    }
}
