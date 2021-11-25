const queries = require("../model/queries")
const bcrypt = require("bcrypt")
const salts = 10
class controlUsers {
    readAllUsers(req, res) {
        const sqlQuery = 'select *from users'
        queries(sqlQuery).then(result => {
            res.status(200).send({
                "status": 200,
                "message": "Lista de Usuario",
                "Items": result
            })
        }).catch((error) => {
            res.send(error)
        })
    }
    createUsers(req, res) {
        const sqlQuery = "INSERT INTO users SET?"
        const dados = req.body
        bcrypt.genSalt(salts, (err, salt) => {
            bcrypt.hash(dados.passwordUser, salt, (bcryptErr, passwordHash) => {
                dados.passwordUser = passwordHash
                queries(sqlQuery, dados).then(result => {
                    res.status(201).send({
                        "status": 201,
                        "message": "Usuario cadastrado com sucesso"
                    })
                }).catch(error => {
                    if (error.errno == 1062) {
                        res.status(400).send({
                            "status": 400,
                            "message": "ID ou Email duplicado"
                        })
                    } else {
                        res.status(500).send({ "status": 500, "message": "Erro Interno do Servidor" })
                    }
                })
            })
        })
    }
    deleteUsers(req, res) {
        const sqlQuery = "DELETE FROM users WHERE idUser=?"
        const dados = req.params.id
        queries(sqlQuery, dados).then(result => {
            if (result.affectedRows === 0) {
                res.status(404).send({ "status": 404, "message": "O usuario não foi encontrado" })
            } else {
                res.status(201).send({ "status": 201, "message": "Excluido com sucesso" })

            }
        }).then((error) => {
            res.status(500).send({ "status": 500, "message": "Erro Interno do Servidor" })
        })
    }
    updateUsers(req, res) {
        const sqlQuery = `UPDATE users SET? where idUser=${req.params.id}`
        const dados = req.body
        queries(sqlQuery, dados).then(resposta => {
            if (resposta.changedRows != 0) {
                res.status(201).send({
                    "status": 201,
                    "message": "Alterações concluidas com sucesso"
                })
            } else if (resposta.affectedRows === 1) {
                res.status(401).send({
                    "status": 401,
                    "message": "Não houve alterações"
                })
            } else {
                res.status(404).send({
                    "status": 404,
                    "message": "Usuario não encontrado"
                })
            }
        }).catch(error => {
            res.status(500).send({
                "status": 500,
                "message": "Erro interno do servidor"
            })
        })
    }
}
module.exports = new controlUsers()


