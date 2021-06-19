const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Commune = new mongoose.Schema({
    Id_commune: { type: Number, require: true },
    Code: { type: String, require: true },
    Nom: { type: String, require: true },
    Id_wilaya: { type: Number, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Commune.plugin(AutoIncrement, { inc_field: 'Id_commune' });
module.exports = mongoose.model('communes', Commune);

