const express = require('express');
const router = express.Router();
const { fetchAndSaveData } = require('../controllers/dndController');
const fetch = require('axios');

router.get('/fetch-and-save-data/:type', async (req, res) => {
    const { type } = req.params; // Extract the 'type' parameter from req.params
    try {
        const saveData = await fetchAndSaveData(type);
        res.json(saveData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});

module.exports = router;
