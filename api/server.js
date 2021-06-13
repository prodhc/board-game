const express = require("express")
const cors = require('cors')
const playersRouter = require('./players/players-router')
const server = express()

server.use(express.json())
server.use(cors())

server.use('/api/players', playersRouter)

server.use('e', (req, res) => {
    res.send(`<h2>Hello There</h2>`)
})

server.use('*', (req, res, next) => {
    next({ status: 404, message: "Cant find that!"})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        customMessage: "server error!"
    })
})

module.exports = server