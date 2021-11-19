const conection = require("../infra/config/conection")

const queries = (query, data = '') => {
    return new Promise((resolve, reject) => {
        conection.query(query, data, (mysqlError, mysqlResult) => {
            if (mysqlError) {
                reject(mysqlError)
            } else {
                resolve(mysqlResult)
            }
        })


    })
}
module.exports = queries