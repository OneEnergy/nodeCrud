const express = require("./infra/config/customExpress")
const conection = require("./infra/config/conection")
const app = express()

conection.connect((mysqlError, mysqlResult)=>{
    if(mysqlError){
        console.log({
            "status": "error",
            "message": mysqlError})
        }else{
            console.log(mysqlResult)
            app.listen(3390, ()=>{
                
            const tables = require("./model/tables")
            console.log("server is running in port 3390")
        })
    }
})
