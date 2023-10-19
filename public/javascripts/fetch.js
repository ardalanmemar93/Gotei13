document.addEventListener('DOMContentLoaded', function () {
    const generateStoryButtons = document.querySelectorAll('.generate-story-button');
  
    generateStoryButtons.forEach((button) => {
      button.addEventListener('click', function () {
        const characterId = button.getAttribute('data-character-id');
        // You need to fetch character data based on characterId
        // For simplicity, I'm assuming you have a JavaScript object named "charactersData"
        const character = charactersData.find((char) => char._id === characterId);
        if (character) {
          // Construct and send a request to your server to generate the story
          fetch('/generate-story', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(character),
          })
            .then((response) => response.json())
            .then((data) => {
              // Display the generated story to the user (update the card content)
              const card = button.parentElement.parentElement;
              const storyContent = card.querySelector('.card-title + p');
              storyContent.textContent = `Generated Story: ${data.story}`;
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      });
    });
  });