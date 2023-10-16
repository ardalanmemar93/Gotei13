const mongoose = require('mongoose');

const dndDataSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ['classes', 'background', 'race', 'equipment', 'mosters', 'skills'],
    },
    name: {
        type: String,
        required: true,
    },
    description: String,
    
});

const DndData = mongoose.model('DndData', dndDataSchema);

module.exports = DndData;