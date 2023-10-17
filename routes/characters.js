const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characters');
const Character = require('../models/character'); 
const Comment = require('../models/comment');

// Route to create a new character
router.post('/', characterController.createCharacter);

// Route to retrieve a list of characters
router.get('/', characterController.getCharacters);

// Route to render the character creation form
router.get('/create', (req, res) => {
    res.render('character-form');
  });
  
  // Route to render the list of characters
  router.get('/list', async (req, res) => {
    try {
      const characters = await Character.find();
      res.render('character-list', { characters });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve characters' });
    }
  });
  

// Route to retrieve a specific character by ID
router.get('/:id', characterController.getCharacterById);

// Route to update a character by ID
router.get('/update/:id', async (req, res) => {
  const characterId = req.params.id;
  try {
    const character = await Character.findById(characterId);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.render('character-update', { character }); // Render a character update form
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the character' });
  }
});

router.put('/update/:id', async (req, res) => {
    const characterId = req.params.id;
    const updatedData = req.body;
  
    try {
      const updatedCharacter = await Character.findByIdAndUpdate(characterId, updatedData, { new: true });
      if (!updatedCharacter) {
        return res.status(404).json({ error: 'Character not found' });
      }
      //redirect
      res.redirect('/characters/list');
    } catch (error) {
      res.status(500).json({ error: 'Failed to update the character' });
    }
  });




  


// Route to handle comment submission for a specific character
router.post('/:id/comments', async (req, res) => {
    // Retrieve the character ID from the URL
    const characterId = req.params.id;
  
    // Retrieve comment data from the request body
    const commentData = req.body;
  
    try {
      // Find the character by ID
      const character = await Character.findById(characterId);
  
      if (!character) {
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Create a new comment
      const newComment = new Comment(commentData);
      newComment.character = character;
      newComment.author = req.user;
  
      await newComment.save();
      character.comments.push(newComment);
      await character.save();
  
      // Redirect back to the characters/list page
      res.redirect('/characters/list');
    } catch (error) {
      // Error handling if necessary
    }
  });




  




// Route to delete a character by ID
router.delete('/:id', characterController.deleteCharacter);


module.exports = router;
