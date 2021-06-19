const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Service = new mongoose.Schema({
    Id_service: { type: Number, require: true },
    Nom: { type: String, require: true },
    Id_Categorie: { type: String, require: true },
    Prix: { type: String, require: true },
    Description: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Service.plugin(AutoIncrement, { inc_field: 'Id_service' });
module.exports = mongoose.model('services', Service);

