const button = document.querySelector("#generate-button");
const poem = document.querySelector("#poem-container");

button.addEventListener("click", provideAnswer);

console.log(userInstructions.value);

function provideAnswer(event) {
  event.preventDefault();

  const userInstructions = document.querySelector("#text-input");
  let apiKey = "7a7cocba743t477eeab6780bf9e73b70";
  let context = "You are a romantic poet who likes to write 4 line poems.";
  let prompt = `Provide me a French poem about: ${userInstructions.value}. Write the answer with basic HTML styling, so each line is written in the new line. Sign it at the end with 'SheCodes AI' Example: <strong>SheCodes AI</strong>`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  poem.innerHTML = "Loading a poem, please wait";

  axios
    .get(apiUrl)
    .then((response) => {
      new Typewriter("#poem-container", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
      });
    })
    .catch((error) => {
      console.error("Error fetching a poem:", error);
    });
}
