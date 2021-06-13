const express = require('express')
const Player = require('./players-model')
const router = express.Router()
const {
     checkPlayerId,
     checkPlayerPayload,
} = require('../middleware/middleware')

router.get('/',  async (req, res, next) => {
    try {
        const player = await Player.getAll()
        res.json(player)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkPlayerId, async (req, res, next) => {
    res.json(req.player)
})


router.post('/', checkPlayerPayload, async (req, res, next) => {
    try {
        const player = await Player.create(req.body)
        res.json(player)
    } catch (err) {
        next(err)
    }
})

module.exports = router