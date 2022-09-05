const express = require('express');
const router = express.Router();
// Load Location model
const Location = require('../models/Location');

// Walkway Location
router.get('/walkway', (req, res) => {
  let errors = [];
  var location = [];
  var name = "walkway";
  Location.findOne({ name: name }).then(location => {
    if (location) {
      res.render('walkway', {location: location });
    }
    else {
      errors.push({ msg: 'Location not found!' });
    }
  });
});

// Register
router.post('/add', (req, res) => {
  const { name, descriptor1, descriptor2} = req.body;
  let errors = [];

  if (!name) {
    errors.push({ msg: 'Please enter a name' });
  }

  if (errors.length > 0) {
    res.render('add', {
      errors,
      name,
      descriptor1,
      descriptor2
    });

  } else {
    Location.findOne({ name: name }).then(location => {
      if (location) {
        errors.push({ msg: 'Name already exists' });
        res.render('register', {
          errors,
          name,
          descriptor1,
          descriptor2
        });
      } else {
        const newLocation = new Location({
          name,
          descriptor1,
          descriptor2
        });
        newLocation
        .save()
        .then(location => {
            req.flash(
              'success_msg',
              'A new location has been saved in the database'
            );
            res.redirect('/sites/upload');
        })
        .catch(err => console.log(err));
      }
    });
  }
});

// Remove Location Page
router.delete('/removeLocation', (req, res) => res.render('removeLocation'));

module.exports = router;