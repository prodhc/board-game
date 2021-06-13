const Player = require('../players/players-model')


const checkPlayerId = async (req, res, next) => {
  try {
    const player = await Player.getById(req.params.id)
    if (!player) {
      next({ status: 404, message: 'not found'})
    } else {
      req.player = player
      next()
    }
} catch (err) {
    next(err)
}
}

const checkPlayerPayload = (req, res, next) => {
  if (!req.body.name) return next({
    status: 400,
    message: `name is missing`,
  })
  if (!req.body.people) return next({
    status: 400,
    message: `you have to have people to play!`,
  })
  next()
}

// const checkVinNumberValid = (req, res, next) => {
//   if(vin.validate(req.body.vin)) {
//     next()
//   } else {
//     next( { status: 400, message: `vin ${req.body.vin} is invalid`})
//   }
// }

// const checkVinNumberUnique = async (req, res, next) => {
//   try {
//     const existing = await Car.getByVin(req.body.vin)
//     if (!existing) {
//       next()
//     } else {
//       next({ status: 400, message: `vin ${req.body.vin} already exists`})
//     }
//   } catch (err) {
//     next(err)
//   }
// }

module.exports = {
  checkPlayerId,
  checkPlayerPayload,
}