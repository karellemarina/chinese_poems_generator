function displayPoem(response) {
  console.log("poem generator");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "8bc7430591fcdeaet361d96ab0f37o46";
  let prompt = `Generate a chinese poem about ${instructionsInput.value}`;
  let context =
    "User instructions: You are a romantic and melancholic poem expert and love to write short poems. Your mission is to generate a 4 line in basic HTML. Make sure to follow the user instructions below. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let poemeFormElement = document.querySelector("#poem-generator-form");
poemeFormElement.addEventListener("submit", generatePoem);
