const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = new mongoose.Schema({
    Id_user: { type: Number, require: true },
    Nom: { type: String, require: true },
    MotDePasse: { type: String, require: true },
    Email: { type: String, require: true },
    Token: { type: String, require: true },
    Telephone: { type: String, require: true },
    Adresse: { type: String, require: true },
    Wilaya: { type: String, require: true },
    Type_user: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },

});
User.plugin(AutoIncrement, { inc_field: 'Id_user' });
module.exports = mongoose.model('users', User);

