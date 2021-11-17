const express = require("./infra/config/customExpress")
const conexao = require("./infra/config/conexao")
const app = express()

conexao.connect((mysqlError, mysqlResult)=>{
    if(mysqlError){
        console.log({
            "status": "error",
            "message": mysqlError})
        }else{
            console.log(mysqlResult)
            app.listen(3390, ()=>{
                
            const tables = require("./model/tables")
            console.log("Servidor na porta 3390")
        })
    }
})
