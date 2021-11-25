const conection = require("../infra/config/conection")
class tables {
    constructor() {
        this.users()
    }

    users() {
        const sqlQuery = "CREATE TABLE IF NOT EXISTS `crud`.`users` (`idUser` INT NOT NULL AUTO_INCREMENT,`nameUser` VARCHAR(80) NOT NULL,`generUser` VARCHAR(80) NOT NULL,`emailUser` VARCHAR(80) NOT NULL UNIQUE KEY,`passwordUser` VARCHAR(255) NULL,PRIMARY KEY (`idUser`))"

        conection.query(sqlQuery, (mysqlError, mysqlResult) => {
            if (mysqlError) {
                console.log(mysqlError)
            } else {
                console.log("tabelas criadas")
            }
        })
    }
}

module.exports = new tables()