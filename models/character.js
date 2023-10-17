const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  race: String,
  background: String,
  dndClass: String,
  equipment: [String],  
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  published: {
    type: Boolean,
    default: false,
  }
 
});

// Create the Character model
const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
