const express = require("express");
const server = express();

server.listen(3000);

// congigurar pasta publica

server.use(express.static("public"))

//pagina inicial
server.get("/", (req, res) => {
    res.sendFile(__dirname+ "/views/index.html")
})