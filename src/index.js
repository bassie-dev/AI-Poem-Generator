function SearchPoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let poemElement = document.querySelector("#poem");

  poemElement.innerHTML = `<div class="blink">⏳ Writing a poem about <strong>${instructionsInput.value}</strong>...</div>`;

  let apiKey = "c5f9o2bda4fat8f0a304ce0a3b4bb317";
  let prompt = `Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a creative poet. Provide a 8 lines poem and separate the lines using <br /> tags.choose only one poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showPoem);
}
function showPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", SearchPoem);
