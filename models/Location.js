const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coords_in_site: {
        type: String,
        required: true
    },
    link_to_media: {
        type: String,
        required: true
    }
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;