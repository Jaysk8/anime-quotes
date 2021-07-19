console.log("Running from inside script.js");


const animeName = document.querySelector("#anime-name");
const animeQuote = document.querySelector("#anime-quote");
const animeCharacter = document.querySelector("#anime-character");
const genBtn = document.querySelector("#quoteGenBtn");

// genBtn.addEventListener("click", () => {
//     getAnimeQuote();
// })

// function getAnimeQuote() {
//     fetch('https://animechan.vercel.app/api/random')
//     .then(response => response.json())
//     // .then(quote => console.log(quote))
//     .then(data => {
//         animeName.innerHTML = data.anime
//         animeQuote.innerHTML = data.quote
//         animeCharacter.innerHTML = `-- ${data.character}`
//     })
// }

genBtn.addEventListener("click", () => {
    generateQuote();
})

function generateQuote() {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => {
        animeName.textContent = data.anime;
        animeQuote.textContent = data.quote;
        animeCharacter.textContent = ` -- ${data.character}`;
    })
}