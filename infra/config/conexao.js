const mysql = require("mysql")

const conexao = mysql.createConnection({
    host: "localhost",
    user: "kaue",
    password: "1232",
    database: "crud"
})

module.exports = conexao