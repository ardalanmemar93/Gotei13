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
      const characters = await Character.find().populate('comments');
      
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



//comments
  router.post('/:id/comments', async (req, res) => {
    const characterId = req.params.id;
    const text = req.body.comment;
  
    console.log('Received comment text:', text);
  
    try {
      const character = await Character.findById(characterId);
  
      if (!character) {
        console.log('Character not found');
        return res.status(404).json({ error: 'Character not found' });
      }
  
      // Create a new comment
      const newComment = new Comment({ text, author: req.user._id, character: characterId });
  
      console.log('New comment data:', newComment);
  
      await newComment.save();
      character.comments.push(newComment);
      await character.save();
  
      // Redirect back to the profile page
      res.redirect('/profile');
    } catch (error) {
      console.error('Error:', error);
      
    }
  });

// Route to delete a comment by ID
router.delete('/:characterId/comments/:commentId', characterController.deleteComment);

  //  Route to publish
router.post('/:id/publish', characterController.publishCharacter);


// Route to delete a character by ID
router.delete('/:id', characterController.deleteCharacter);




router.get('/gallery/:id/story', async (req, res) => {
  try {
    const characterId = req.params.id;

    const character = await Character.findById(characterId);

    if (!character) {
      return res.status(404).send('Character not found');
    }
    res.render('story', { characterStory: character.story });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});



module.exports = router;
