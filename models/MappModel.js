const mongoose = require('mongoose');

const MappSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    //sites: [String],
    link_to_media: {
        type: String,
        required: true
    }
});

const Mapp = mongoose.model('Mapp', MappSchema);

module.exports = Mapp;