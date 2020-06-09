const express = require("express")
const server = express()

server.get("/", (req, res) => {
    res.send("Hello wold")
})

server.listen(3000)
