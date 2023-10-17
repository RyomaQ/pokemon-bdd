const mongoose = require('mongoose');


const PkmSchema = new mongoose.Schema({
    name: String,
    type: String,
    level: Number
});

module.exports = mongoose.model('Pkm', PkmSchema);