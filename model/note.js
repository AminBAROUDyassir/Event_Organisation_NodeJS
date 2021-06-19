const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Note = new mongoose.Schema({
    Id_note: { type: Number, require: true },
    Id_user: { type: Number, require: true },
    Nom: { type: String, require: true },
    Description: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Note.plugin(AutoIncrement, { inc_field: 'Id_note' });
module.exports = mongoose.model('notes', Note);

