
const Wilaya = require("../model/wilaya");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Wilaya.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewWilaya = new Wilaya({
                Nom: req.body.Nom,
                Code: req.body.Code
            });
            NewWilaya.save();
            res.send(NewWilaya);

        }

    });
}

exports.get_by_id = function (req, res) {

    let Id = req.params.id;
    Wilaya.findOne({ Id_wilaya: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}
exports.get_by_code = function (req, res) {

    let code = req.params.code;
    Wilaya.findOne({ Code: code }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Wilaya.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}