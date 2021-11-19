const queries = require("../model/queries")
class controlUsers{
    readAllUsers(req, res){
        const sqlQuery = 'select *from users'
        return queries(sqlQuery)
        
    }
}
module.exports = new controlUsers()