const express = require('express');
const router = express.Router();
const Character = require('../models/character');
const Comment = require('../models/comment');



// Create a new character
exports.createCharacter = async (req, res) => {
  const characterData = req.body;
  characterData.author = req.user._id;

  try {
    const newCharacter = new Character(characterData);
    await newCharacter.save();
    res.redirect('/profile');
  } catch (error) {
    res.status(500).json({ error: 'Character creation failed' });
  }
};





// Retrieve a list of characters
exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve characters' });
  }
};

// Retrieve a specific character by ID
exports.getCharacterById = async (req, res) => {
  const characterId = req.params.id;

  try {
    const character = await Character.findById(characterId);
    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(character);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the character' });
  }
};





// Delete a character by ID
exports.deleteCharacter = async (req, res) => {
  const characterId = req.params.id;

  try {
    const deletedCharacter = await Character.findByIdAndDelete(characterId);
    if (!deletedCharacter) {
      return res.status(404).json({ error: 'Character not found' });
    }

    // Redirect to the character list page after successful deletion
    res.redirect('/profile');
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the character' });
  }
};



// Publish a character by ID
exports.publishCharacter = async (req, res) => {
  try {
    const characterId = req.params.id;

    // Find the character by ID
    const character = await Character.findById(characterId);

    if (!character) {
      return res.status(404).json({ error: 'Character not found' });
    }

    // Set the character's "published" field to true
    character.published = true;

    await character.save();

    // Redirect to the gallery or any relevant page
    res.redirect('/gallery');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to publish the character' });
  }
};




// Delete a comment by ID
exports.deleteComment = async (req, res) => {
  const commentId = req.params.commentId;
  const userId = req.user._id; // Assuming you're using a user authentication system

  try {
    // Find the comment by ID
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the current user is the author of the comment
    if (comment.author.toString() !== userId.toString()) {
      return res.status(403).json({ error: "You're not authorized to delete this comment" });
    }

    // Delete the comment if the authorization check passed
    await Comment.findByIdAndDelete(commentId);

    // Redirect back to the character's comments or another relevant page
    res.redirect(`/gallery`);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to delete the comment' });
  }
};



