
const Commune = require("../model/commune");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Commune.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewCommune = new Commune({
                Nom: req.body.Nom,
                Code: req.body.Code,
                Id_wilaya: req.body.Id_wilaya
            });
            NewCommune.save();
            res.send(NewCommune);
        }
    });
}

exports.get_by_id = function (req, res) {

    let Id = req.params.id;
    Commune.findOne({ Id_commune: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Commune.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_by_wilaya = function (req, res) {
    let Id_wilaya = req.params.id;
    Commune.find({ Id_wilaya: Id_wilaya }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}