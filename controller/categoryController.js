
const Category = require("../model/category");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Category.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewCategory = new Category({
                Nom: req.body.Nom

            });
            NewCategory.save();
            res.send(NewCategory);

        }

    });
}

exports.get_by_id = function (req, res) {

    let Id = req.params.id;
    Category.findOne({ Id_category: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Category.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}