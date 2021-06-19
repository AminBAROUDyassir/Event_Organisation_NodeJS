const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Wilaya = new mongoose.Schema({
    Id_wilaya: { type: Number, require: true },
    Code: { type: String, require: true },
    Nom: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Wilaya.plugin(AutoIncrement, { inc_field: 'Id_wilaya' });
module.exports = mongoose.model('wilayas', Wilaya);

