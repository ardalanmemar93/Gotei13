const Character = require('../models/character');

// Create a new character
exports.createCharacter = async (req, res) => {
  const characterData = req.body;

  try {
    const newCharacter = new Character(characterData);
    await newCharacter.save();
    // Assuming your character list page URL is "/characters/list"
    res.redirect('/characters/list');
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

// Update a character by ID
exports.updateCharacter = async (req, res) => {
  const characterId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedCharacter = await Character.findByIdAndUpdate(characterId, updatedData, { new: true });
    if (!updatedCharacter) {
      return res.status(404).json({ error: 'Character not found' });
    }
    res.json(updatedCharacter);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update the character' });
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
    res.redirect('/characters/list');
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete the character' });
  }
};

