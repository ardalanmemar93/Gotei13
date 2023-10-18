const express = require('express');
const router = express.Router();
const Character = require('../models/character'); 

// Route to view the gallery
router.get('/', async (req, res) => {
  try {
    // Retrieve published characters
    const publishedCharacters = await Character.find({ published: true }).populate('comments');

    // Render the gallery page and pass the published characters
    res.render('gallery', { characters: publishedCharacters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve published characters' });
  }
});

module.exports = router;
