const express = require("express");
const server = express();

server.listen(3000);

//pagina inicial
server.get("/", (req, res) => {
    res.send("Cheguei aqui")
})