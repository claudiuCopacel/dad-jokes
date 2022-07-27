const btn = document.querySelector(".btn");
const advice = document.querySelector(".advice");
// const id = document.querySelector(".id");

btn.addEventListener("click", joke());
window.addEventListener("onLoad", joke());

function joke() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f92abcea09msh9d164888a25e5f1p1f1991jsnc4d9d9a1f2e7",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
    },
  };

  fetch("https://dad-jokes.p.rapidapi.com/random/joke", options)
    .then((response) => response.json())
    .then((data) => {
      advice.innerText = ` - ${data.body[0].setup} 
        - ${data.body[0].punchline}`;
    })
    .catch((err) => console.error(err));
}
