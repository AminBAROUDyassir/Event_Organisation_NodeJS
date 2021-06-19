
const Demande = require("../model/demande");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Demande.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewDemande = new Demande({

                Nom: req.body.Nom,
                Email: req.body.Email,
                Telephone: req.body.Telephone,
                Adresse: req.body.Adresse,
                Wilaya: req.body.Wilaya,
                Remarque: req.body.Remarque,

            });
            NewDemande.save();
            res.send(NewDemande);

        }

    });
}

exports.get_by_id = function (req, res) {

    let Id = req.params.id;
    Demande.findOne({ Id_demande: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Demande.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}