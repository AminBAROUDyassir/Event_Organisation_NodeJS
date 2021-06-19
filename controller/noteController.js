
const Note = require("../model/note");

exports.create = function (req, res) {
    let Nom = req.body.Nom;
    Note.findOne({ Nom: Nom }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewNote = new Note({

                Nom: req.body.Nom,
                Id_user: req.body.Id_user,
                Description: req.body.Description,

            });
            NewNote.save();
            res.send(NewNote);

        }

    });
}

exports.get_by_id = function (req, res) {

    let Id = req.params.id;
    Note.findOne({ Id_note: Id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}


exports.get_by_user = function (req, res) {

    let Id_user = req.params.id;
    Note.find({ Id_user: Id_user }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Note.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}