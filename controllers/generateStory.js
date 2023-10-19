
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
          max_tokens: 1000
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

