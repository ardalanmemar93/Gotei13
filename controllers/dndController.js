// const fetch = require('node-fetch');
const DndData = require('../models/DndData');



// async function fetchAndSaveData(type) {
//     try {
//         const response = await fetch(`https://www.dnd5eapi.co/api/${type}`);
//         if(!response.ok) {
//             throw new Error(`Error fetching ${type} data: ${response.status} - ${response.statusText}`)
//         }

//         const responseData = await response.json();
//         const data = responseData.results;

//         const saveData = await DndData.create(data.map(item => ({ type, ...item})));
//         return saveData;
//     } catch (error) {
//         console.error( `Error fectching and saving ${type}:`, error);
//         throw error;
//     }
// }





