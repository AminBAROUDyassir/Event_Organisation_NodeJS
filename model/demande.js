const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Demande = new mongoose.Schema({
    Id_demande: { type: Number, require: true },
    Nom: { type: String, require: true },
    Email: { type: String, require: true },
    Telephone: { type: String, require: true },
    Adresse: { type: String, require: true },
    Wilaya: { type: String, require: true },
    Remarque: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Demande.plugin(AutoIncrement, { inc_field: 'Id_demande' });
module.exports = mongoose.model('demandes', Demande);

