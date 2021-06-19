const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Category = new mongoose.Schema({
    Id_category: { type: Number, require: true },
    Nom: { type: String, require: true },
    Created_at: { type: Date, default: Date.now },
    Updated_at: { type: Date, default: Date.now },
});

Category.plugin(AutoIncrement, { inc_field: 'Id_category' });
module.exports = mongoose.model('categories', Category);

