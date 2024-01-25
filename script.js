const jokesDiv = document.querySelector(".jokes-place");
const jokesPera = document.querySelector("#jokes-pera");
const jokesBtn = document.querySelector("#btn");

async function generateJokes() {
  try {
    let printJoke = "";

    // console.log("run......");

    const response = await fetch(
      "https://api.api-ninjas.com/v1/jokes?limit=1",
      {
        headers: {
          "X-Api-Key": "mOAqfUytmFSzRex9wQOeEg==g7VWxyEuFSLuvUJz",
        },
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    console.log(data);

    printJoke = data[0].joke;
    // console.log(printJoke);
    jokesPera.innerText = printJoke;
  } catch (error) {
    console.error("An error occurred while fetching the joke:", error);
  }
}
