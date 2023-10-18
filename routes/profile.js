const express = require('express');
const router = express.Router();
const Character = require('../models/character'); 

router.get('/', async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }

  const userId = req.user._id;

  try {
    const characters = await Character.find({ author: userId }).populate('comments');

    if (!characters || characters.length === 0) {
      return res.render('profile', { characters: [] }); 
    }

    res.render('profile', { characters });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }
});

module.exports = router;


  