const queries = require("../model/queries")
class controlUsers {
    readAllUsers(req, res) {
        const sqlQuery = 'select *from users'
        queries(sqlQuery).then(result => res.send(result)).catch((error) =>{
            res.send(error)
        })
    }
    createUsers(req, res){
        const sqlQuery = "INSERT INTO users SET?"
        const dados = req.body
        queries(sqlQuery, dados).then(result =>{
            res.send(result)
        }).catch(error => res.send(error))
    }
    deleteUsers(req, res){
        const sqlQuery = "DELETE FROM users WHERE idUser=?"
        const dados = req.params.id
        queries(sqlQuery, dados).then(result =>{
            res.send(result)
        }).then((error)=>{
            res.send(error)
        })
    }
    updateUsers(req, res){
        const sqlQuery = `UPDATE users SET? where idUser=${req.params.id}`
        const dados = req.body
        queries(sqlQuery, dados).then(resposta => res.status(200).send(resposta)).catch(error => res.status(400).send(error))
    }
}
module.exports = new controlUsers()