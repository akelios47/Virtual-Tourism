const mongoose = require('mongoose');

const SiteSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coordinates: {
        type: String,
        required: true
    },
    coords_in_map: {
        type: String,
        required: true
    },
    link_to_media: {
        type: String,
        required: true
    }
});

const Site = mongoose.model('site', SiteSchema);

module.exports = Site;