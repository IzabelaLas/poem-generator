const button = document.querySelector("#generate-button");
const poem = document.querySelector("#poem-container");

button.addEventListener("click", provideAnswer);
let apiKey = "7a7cocba743t477eeab6780bf9e73b70";
let context =
  "make me laugh. Please provide the answer in basic HTML. Example <p>joke<p/>";
let prompt = "Tell me a unique joke about IT.";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

function provideAnswer(event) {
  event.preventDefault();
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
