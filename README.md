# Gotei13
# 

![Gotei13 Wireframe](/public/images/wireframe1.png)

"Gotei13" is a web application that enables users to create, publish, and view characters, access a character gallery, comment on characters created by others, and read AI-generated stories about these characters, providing a platform for collaborative storytelling and community interaction.

# A live build can be found [here](https://gotei13-56c0be88deb9.herokuapp.com/).

## Tools

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Trello](https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

#### Maintained
![maintaned](https://img.shields.io/badge/Maintained%3F-yes-green.svg)

## Gotei13

"Gotei13" is an engaging web application that combines storytelling and community interaction. It provides a platform for users to create and publish unique characters and allows others to explore a character gallery, comment on characters created by their peers, and read AI-generated stories about these characters.

- The primary objective of "Gotei13" is to foster creativity and storytelling. Users can create their characters and embark on imaginative adventures within a vibrant community.

- "Gotei13" encourages users to create characters, customize their traits, and set them on unique adventures within the context of the D&D lore.
It allows users to comment on characters created by others, fostering collaboration and storytelling.
Users can also generate AI-authored stories about their characters, adding a new layer of depth to their adventures.


View your profile page.
![Gotei13 Wireframe](/public/images/wireframe2.png)
 Create and update characters.
![Gotei13 Wireframe](/public/images/wireframe3.png)
View an AI generated story.
![Gotei13 Wireframe](/public/images/wireframe4.png)
Log In.
![Gotei13 Wireframe](/public/images/wireframe5.png)

## Features
- User-Friendly Front-End Interface
- Interactive Character Creation
- AI-Generated Stories
- Visually Engaging Elements
- Responsive Design with CSS Bootstrap
- Background Images
- User Authentication via Google
- Authorization for User Permissions
- Explore and Engage with Characters and Stories

## Technologies used

In the development of the Gotei13 application, a versatile stack of technologies was harnessed to create a seamless user experience. HTML, the backbone of web content, provides the structure and foundation for the application, ensuring that users can interact with the system's components effortlessly. CSS and Bootstrap were utilized to craft a visually appealing and responsive front-end, offering a dynamic and user-friendly interface.

On the server side, Node.js and Express.js came into play to create a robust back-end, enabling smooth data flow and functionality behind the scenes. MongoDB, a NoSQL database, was employed to manage and store user data and character information efficiently, while Mongoose provided an elegant schema-based solution for data modeling.

The power of npm (Node Package Manager) was harnessed to seamlessly integrate various packages, libraries, and dependencies into the application, streamlining development and ensuring scalability. Git was employed for version control, allowing for collaborative development and code management. JavaScript served as the scripting language that brought interactivity and dynamism to the application, enhancing user engagement.

Google Passport and Authentication were essential components for user registration and login, ensuring secure and reliable user authentication. These technologies collectively contributed to the creation of the Gotei13 application, offering a unique and engaging experience for users in the world of character creation and storytelling.

## Challenges

The development of the Gotei13 application came with several challenges, including:

- **User Authentication**: Implementing secure user authentication using Google Passport required careful planning and attention to detail to ensure that user data was protected and that only authorized users could access the system.

- **Data Management**: Managing character data in MongoDB presented challenges related to data validation, schema design, and data storage. Ensuring data consistency and integrity was vital, and adapting to the flexibility of a NoSQL database was a learning curve.

- **Real-time AI Story Generation**: Integrating real-time AI story generation using OpenAI's GPT-3 was a unique challenge. Handling API requests and responses in a way that was seamless and user-friendly required fine-tuning the application's logic.

- **Front-End Complexity**: Developing a visually appealing and user-friendly front-end involved tackling challenges related to responsive design, layout, and interactive elements. Ensuring the application was accessible across various devices and screen sizes was crucial.

- **Error Handling**: Implementing robust error handling to provide meaningful feedback to users when things went wrong was essential. Handling various types of errors and presenting them in a user-friendly manner required careful planning.

- **Security**: Ensuring the security of user data and preventing vulnerabilities such as cross-site scripting (XSS) or cross-site request forgery (CSRF) was a significant concern. Regularly updating dependencies and applying security best practices were necessary.

- **Scalability**: As the application attracted more users and data, ensuring that it could scale effectively became a challenge. Optimizing queries, performance tuning, and load testing were all part of addressing this challenge.

- **User Experience**: Balancing the desire for rich features with a smooth and intuitive user experience was a continuous challenge. Striking the right balance between functionality and usability required user feedback and iterative design improvements.

Despite these challenges, the development of the Gotei13 application was a rewarding experience, resulting in a platform that allows users to create and share their unique characters and stories in a captivating and interactive environment.

## Favorite Function
- The `createStory` function stands out as my favorite because it seamlessly combines modern technology and creativity to deliver a truly captivating user experience. This function leverages the power of OpenAI's GPT-3.5 Turbo model to generate personalized and immersive stories based on user-provided character details. By dynamically crafting stories featuring a hero with a name, race, background, class, and equipment, the function blurs the lines between technology and storytelling. It enriches the Gotei13 application by allowing users to access AI-generated narratives tailored to their unique characters, enhancing engagement and immersion. The function's ability to breathe life into characters and worlds through automated storytelling is not only technically impressive but also a source of endless entertainment and inspiration, making it a standout feature within the application.

```js
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

```

## Future
- [ ] Mobile support
- [ ] Using the D&D53 api to populate the app
- [ ] Adding the user detaile in the comments
- [ ] Adding the ability for users to uplaod their character images
- [ ] Adding the functionality so that the user can favourite characters
- [ ] Adding the functionality so that users can save the AI generated story
- [ ] Expand on the overall design
- [ ] Refactor code 

