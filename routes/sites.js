const express = require('express');
const router = express.Router();
// Load Site model
const Site = require('../models/Site');

// Uptown Site
router.get('/uptown', (req, res) => res.render('uptown'));

// Downtown Site
router.get('/downtown', (req, res) => res.render('downtown'));

// Sea Site
router.get('/sea', (req, res) => res.render('sea'));

// Site Upload Page
router.get('/upload', (req, res) => res.render('upload'));

// Site Fetch Page
router.get('/fetchSite', (req, res) => res.render('fetchSite'));

// Remove Site Page
router.delete('/removeSite', (req, res) => res.render('removeSite'));

// Register
router.post('/registerSite', (req, res) => {
  const { name, coordinate, coords_in_map, link_to_media } = req.body;
  let errors = [];

  if (!name || !size || !link_to_media) {
    errors.push({ msg: 'Please enter all fields' });
  }
  else {
    Site.findOne({ name: name }).then(site => {
      if (site) {
        errors.push({ msg: 'Name already exists' });
        res.render('registerSite', {
          errors,
          name,
          coordinate,
          coords_in_map,
          link_to_media
        });
      } else {
        const newSite = new Site({
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