const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
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

const City = mongoose.model('City', CitySchema);

module.exports = City;