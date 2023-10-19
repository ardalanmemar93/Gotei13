
const OpenAI = require('openai');

// const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const endpoint = 'https://api.openai.com/v1/chat/completions';

module.exports = {
    createStory,
};




async function createStory(character) {
    try {
        const { name, race, background, dndClass, equipment } = character;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {"role": "system", "content": "You are a storytelling assistant."},
            {"role": "user", 
            "content": ` Generate a short dark, horror story that refrences D&D lore and describe battles in detail based on the following prompt:
            In a world of magic and mystery, there lived a hero named ${name}. ${name} was a ${race} from a ${background} background, trained as a ${dndClass}. Equipped with ${equipment}, they embarked on a grand adventure. Describe their dark and grim journey and bone chilling encounters in captivating detail.`}
          ],
          temperature: 0.5,
          max_tokens: 200
        })
      });
      const data = await response.json();
      console.log(data);
      const aiResponseText = data.choices[0].message.content;
      console.log(aiResponseText);
      return aiResponseText;  
    } catch(error) {
      console.log(error);
      console.error('Error in createWod:', error);
    
    }
    
  }







// async function createStory(character) {
//   try {
//     const { name, race, background, dndClass, equipment } = character;
//     const endpoint = 'https://api.openai.com/v1/chat/completions'; // URL for the OpenAI API

//     // Create a request object
//     const request = {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${OPENAI_API_KEY}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         model: "gpt-3.5-turbo",
//         messages: [
//           {"role": "system", "content": "You are a storytelling assistant."},
//           {"role": "user", 
//             "content": ` Generate a short dark, horror story that references D&D lore and describes battles in detail based on the following prompt:
//             In a world of magic and mystery, there lived a hero named ${name}. ${name} was a ${race} from a ${background} background, trained as a ${dndClass}. Equipped with ${equipment}, they embarked on a grand adventure. Describe their dark and grim journey and bone-chilling encounters in captivating detail.`}
//         ],
//         temperature: 0.5,
//         max_tokens: 1000
//       })
//     };

//     // Make the fetch request to the OpenAI API
//     const response = await fetch(endpoint, request);
    
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }

//     const data = await response.json();
//     const aiResponseText = data.choices[0].message.content;
//     console.log(aiResponseText);
    
//     // Handle the generated story as needed (e.g., display it in the DOM)
//     // You can use document.querySelector and DOM manipulation to display the story
//     const storyElement = document.getElementById('story'); // Assuming you have an element with id 'story' in your HTML
//     storyElement.textContent = aiResponseText;
//   } catch(error) {
//     console.error('Error in createStory:', error);
//   }
// }

// // Usage example
// const character = {
//   name: 'CharacterName',
//   race: 'Elf',
//   background: 'BackgroundType',
//   dndClass: 'ClassType',
//   equipment: ['Equipment1', 'Equipment2'],
// };

// createStory(character);
