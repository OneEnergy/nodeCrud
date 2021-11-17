const express = require("express")
const consign = require("consign")
const cors = require("cors")
module.exports = () => {
    const app = express()

    app.use(cors())
    consign().include("/routes").into(app)

    return app
}