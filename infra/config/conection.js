const mysql = require("mysql")

const conection = mysql.createConnection({
    host: "localhost",
    user: "kaue",
    password: "1232",
    database: "crud"
})

module.exports = conection