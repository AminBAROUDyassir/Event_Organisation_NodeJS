
const Photo = require("../model/photo");

exports.create = function (req, res) {
    let Path = req.body.Path;
    Photo.findOne({ Path: Path }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            const NewPhoto = new Photo({
                Path: req.body.Path,
                Id_service: req.body.Id_service,
            });
            NewPhoto.save();
            res.send(NewPhoto);

        }

    });
}

exports.get_by_id = function (req, res) {

    let Id_photo = req.params.id;
    Photo.findOne({ Id_photo: Id_photo }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_all = function (req, res) {

    Photo.find({}).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}

exports.get_by_service = function (req, res) {
    let service_id = req.params.id;
    Photo.find({ Id_service: service_id }).then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.send(null);
        }
    });
}