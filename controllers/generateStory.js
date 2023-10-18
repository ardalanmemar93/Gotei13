
const OpenAI = require('openai');

const openai = new OpenAI({ key: process.env.OPENAI_API_KEY });

module.exports = {
    createStory,
};

async function createStory(req, res) {
    try {
        const { name, race, background, dndClass, equipment } = req.body;

        const messages = [
            { role: 'system', content: 'You are a storytelling assistant.' },
            {
                role: 'user',
                content: `
                    Generate a short fantasy story based on the following prompt:
                    "In a world of magic and mystery, there lived a hero named ${name}. ${name} was a ${race} from a ${background} background, trained as a ${dndClass}. Equipped with ${equipment}, they embarked on a grand adventure. Describe their action-packed journey and encounters in captivating detail."
                `,
            },
        ];

        console.log('API Request Data:', messages);

        const response = await openai.createCompletion({
            engine: 'gpt-3.5-turbo',
            messages,
            temperature: 0.5,
            max_tokens: 260,
        });
        console.log('API Response:', response);

        const aiResponseText = response.choices[0].text;

        console.log('AI Response Text:', aiResponseText);

        res.status(200).json({ generatedStory: aiResponseText });
    } catch (error) {
        console.error('Error in createStory:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

