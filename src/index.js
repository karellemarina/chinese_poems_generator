function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Alors que je m'appuie sur la balustrade d'une grande tour",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemeFormElement = document.querySelector("#poem-generator-form");
poemeFormElement.addEventListener("submit", generatePoem);
