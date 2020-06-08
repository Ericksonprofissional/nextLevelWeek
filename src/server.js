const express = require("express");
const server = express();

// iniciar servidor
server.listen(3000);

// congigurar pasta publica

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: false
})

//pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html")
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.get("/search", (req, res) => {
    return res.render("searchResults.html");
});

// utilisando templates engine

