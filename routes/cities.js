const express = require('express');
const router = express.Router();
// Load City model
const City = require('../models/City');

// Tyre Page
router.get('/tyre', (req, res) => res.render('tyreCity'));

// Other Page
router.get('/other', (req, res) => res.render('otherCity'));

// Remove City Page
router.delete('/removeCity', (req, res) => res.render('removeCity'));

// Register
router.post('/registerCity', (req, res) => {
  const { name, size, link_to_media } = req.body;
  let errors = [];

  if (!name || !size || !link_to_media) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
    City.findOne({ name: name }).then(city => {
      if (city) {
        errors.push({ msg: 'Name already exists' });
        res.render('registerCity', {
          errors,
          name,
          size,
          link_to_media
        });
      } else {
        const newCity = new City({
          name,
          size,
          link_to_media
        });
      }
    });
  }
});

module.exports = router;
