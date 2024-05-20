function displayPoem(response) {
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
    "User instructions: You are a romantic and melancholic poem expert and love to write short poems. Your mission is to generate a 4 line in basic HTML. Remove the HTML at the beginning. Make sure to follow the user instructions below. Do not include a title to the poem. Sign the poem at the bottom with 'SheCodes AI' inside a <strong> element";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⌛ Generating a Chinese poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemeFormElement = document.querySelector("#poem-generator-form");
poemeFormElement.addEventListener("submit", generatePoem);
