//importar a dependencia sqlite3
const sqlite3 = require("sqlite3").verbose();
// iniciar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db");
