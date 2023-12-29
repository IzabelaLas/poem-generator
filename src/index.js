const button = document.querySelector("#generate-button");
const poem = document.querySelector("#poem-container");

const translateButton = document.querySelector("#translate-button");
button.addEventListener("click", provideAnswer);

function provideAnswer(event) {
  event.preventDefault();

  const userInstructions = document.querySelector("#text-input");
  let apiKey = "7a7cocba743t477eeab6780bf9e73b70";
  let context =
    "You are a romantic poet who likes to write 4 line poems. You mission is to generate a 4 line poem in basic HTML with cursive, separate each line with a <br />.  Sign it at the end with bold 'SheCodes AI' Example: <strong>SheCodes AI</strong>. Do NOT include a title.";
  let prompt = `Provide me a French poem about: ${userInstructions.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  poem.classList.remove("hidden");
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
      translateButton.classList.remove("hidden");
    })
    .catch((error) => {
      console.error("Error fetching a poem:", error);
    });
}
translateButton.addEventListener("click", translatePoem);

function translatePoem(event) {
  event.preventDefault();

  const userInstructions = document.querySelector("#text-input");
  console.log(userInstructions.value);

  let apiKey = "7a7cocba743t477eeab6780bf9e73b70";
  let secondContext =
    "You are a romantic poet who likes to write 4 line poems. You mission is to generate a 4 line poem in basic HTML with cursive separate each line with a <br />.  Sign it at the end with bold 'SheCodes AI' Example: <strong>SheCodes AI</strong>. Do NOT include a title.";
  let secondPrompt = `Provide me an English poem about: ${userInstructions.value}.`;
  let secondApiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${secondPrompt}&context=${secondContext}&key=${apiKey}`;
  const translatedPoemContainer = document.querySelector(
    "#translated-poem-container"
  );
  translatedPoemContainer.classList.remove("hidden");
  translatedPoemContainer.innerHTML = "Loading a poem, please wait";

  axios
    .get(secondApiUrl)
    .then((response) => {
      new Typewriter("#translated-poem-container", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
      });
      translateButton.classList.add("hidden");
    })
    .catch((error) => {
      console.error("Error fetching an English poem:", error);
    });
}
