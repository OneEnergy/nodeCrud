const controlUsers = require("../controllers/controlUsers")

module.exports = app =>{
    app.get("/users", (req, res)=>{
      controlUsers.readAllUsers().then((result)=> res.send(result)).catch((error) =>{
        res.send("errir")
      })
    })
}