const express = require('express');
const router = express.Router();
// Load Location model
const Location = require('../models/Location');

// Location Fetch Page
router.get('/fetchLocation', (req, res) => res.render('fetchLocation'));

// Remove Location Page
router.delete('/removeLocation', (req, res) => res.render('removeLocation'));

// Register
router.post('/registerLocation', (req, res) => {
  const { name, coordinate, coords_in_map, link_to_media } = req.body;
  let errors = [];

  if (!name || !size || !link_to_media) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
    Location.findOne({ name: name }).then(location => {
      if (location) {
        errors.push({ msg: 'Name already exists' });
        res.render('registerLocation', {
          errors,
          name,
          coordinate,
          coords_in_map,
          link_to_media
        });
      } else {
        const newLocation = new Location({
          name,
          coordinate,
          coords_in_map,
          link_to_media
        });
      }
    });
  }
});

module.exports = router;