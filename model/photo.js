const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Photo = new mongoose.Schema({
    Id_photo: { type: Number, require: true },
    Path: { type: String, require: true },
    Id_service: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Photo.plugin(AutoIncrement, { inc_field: 'Id_photo' });
module.exports = mongoose.model('photos', Photo);

