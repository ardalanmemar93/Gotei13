const express = require('express');
const router = express.Router();
const {fetchAndSaveData} = require('../controllers/dndController');
const fetch = require('axios');

router.get('/fetch-and-save-data/:type', async (req, res) => {
    const {type} = req.params;
    try {
        const saveData = await fetchAndSaveData(type);
        res.json(saveData);
    } catch (error) {
        res.status(500).json({ error: 'An error  occurred.'});
    }
});


// router.get('/classes', async (req, res) => {
//     const response = await fetch('https://www.dnd5eapi.co/api/classes');
//     const classes = response.data.results;


//     classes.forEach((dndClass) => {
//         console.log(dndClass)
//     });
//     // res.json(response);
// })

module.exports = router;