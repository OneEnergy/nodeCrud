const controlUsers = require("../controllers/controlUsers")

module.exports = app => {
  app.get("/users", (req, res) => {
    controlUsers.readAllUsers(req, res)
  })

  app.post("/users", (req, res) => {
    controlUsers.createUsers(req, res)
  })
  app.delete("/users/:id", (req, res) => {
    controlUsers.deleteUsers(req, res)
  })
  app.patch("/users/:id", (req, res) => {
    controlUsers.updateUsers(req, res)
  })
}