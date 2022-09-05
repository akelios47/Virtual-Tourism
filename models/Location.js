const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    descriptor1: {
        type: String,
        required: true
    },
    descriptor2: {
        type: String,
        required: true
    }  
});

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;