
const axios = require('axios');

async function fetchAndSaveData(type) {
  try {
    const response = await axios.get(`https://www.dnd5eapi.co/api/${type}`);
    const data = response.data.results;

    // Loop through the fetched data and save it in your database
    for (const item of data) {
      const existingData = await DndData.findOne({ type, name: item.name });
      if (existingData) {
        // Update existing data if needed
        existingData.description = item.description;
        await existingData.save();
      } else {
        // Create a new document if it doesn't exist
        const newData = new DndData({
          type,
          name: item.name,
          description: item.description,
        });
        await newData.save();
      }
    }

    return { message: `${type} data fetched and saved successfully` };
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchAndSaveData };






