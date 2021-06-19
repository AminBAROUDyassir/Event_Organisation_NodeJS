
const Service = require("../model/service");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Service.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewService = new Service({
                Nom: req.body.Nom,
                Prix: req.body.Prix,
                Description: req.body.Description,
                Id_Categorie: req.body.Id_Categorie,
            });
            NewService.save();
            res.send(NewService);

        }

    });
}

exports.get_service_by_id = function (req, res) {

    let Id = req.params.id;
    Service.findOne({ Id_service: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all_service = function (req, res) {

    Service.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}