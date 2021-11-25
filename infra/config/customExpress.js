const express = require("express")
const consign = require("consign")
const cors = require("cors")
const { json, urlencoded } = require("express")
module.exports = () => {
    const app = express()
    app.use(json())
    app.use(urlencoded({ extended: true }))

    app.use(cors())
    consign().include("/routes").into(app)

    return app
}