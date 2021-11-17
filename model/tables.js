const conexao = require("../infra/config/conexao")
class tables {
    constructor(){
        this.users()
    }

    users(){
        const sqlQuery = "CREATE TABLE IF NOT EXISTS `users` (`idUser` INT NOT NULL,`nameUser` VARCHAR(45) NOT NULL,`emailUser` VARCHAR(45) NULL,`generUser` VARCHAR(45) NOT NULL,PRIMARY KEY (`idUser`));"
        
        conexao.query(sqlQuery, (mysqlError, mysqlResult)=>{
            if(mysqlError){
                console.log(mysqlError)
            }else{
                console.log("tabelas criadas")
            }
        })
    }
}

module.exports = new tables()