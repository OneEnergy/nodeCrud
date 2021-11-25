const express = require("./infra/config/customExpress")
const conection = require("./infra/config/conection")
const figlet = require('figlet')
const app = express()

conection.connect((mysqlError, mysqlResult) => {
    if (mysqlError) {
        console.log({
            "status": "error",
            "message": mysqlError
        })
    } else {
        app.listen(3390, () => {
            const tables = require("./model/tables")
            figlet.text("server is running in port 3390",{  
                font: "ANSI Shadow",
                horizontalLayout: "full",
                verticalLayout: "full",
                width: 60,
                whitespaceBreak: true
            },(error, mensage)=>{
                console.log(mensage)
            })
        })
    }
})
