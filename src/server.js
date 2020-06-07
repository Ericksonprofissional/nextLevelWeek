const express = require("express");
const server = express();

// iniciar servidor
server.listen(3000);

// congigurar pasta publica

server.use(express.static("public"))

//pagina inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname+ "/views/index.html")
});

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html");
});

server.get("/search-results", (req, res) => {
    res.sendFile(__dirname + "/views/searchResults.html");
});

