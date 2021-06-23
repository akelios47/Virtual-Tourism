const express = require('express');
const router = express.Router();
// Load Mapp model
const Mapp = require('../models/Mapp');

// Mapp Fetch Page
router.get('/fetchMapp', (req, res) => res.render('fetchMapp'));

// Remove Mapp Page
router.delete('/removeMapp', (req, res) => res.render('removeMapp'));

// Register
router.post('/registerMapp', (req, res) => {
  const { name, size, link_to_media } = req.body;
  let errors = [];

  if (!name || !size || !link_to_media) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
    Mapp.findOne({ name: name }).then(mapp => {
      if (mapp) {
        errors.push({ msg: 'Name already exists' });
        res.render('registerMapp', {
          errors,
          name,
          size,
          link_to_media
        });
      } else {
        const newMapp = new Mapp({
          name,
          size,
          link_to_media
        });
      }
    });
  }
});

module.exports = router;
