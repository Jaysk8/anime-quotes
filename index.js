const express = require("express");
const app = express();
const port = 3000;
const fetch = require("node-fetch")


app.use(express.static('public'))

// app.get("/animequote", (req, res) => {
//     fetch('https://animechan.vercel.app/api/random')
//     .then(response => response.json())
//     .then(quote => console.log(quote))
// })

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})