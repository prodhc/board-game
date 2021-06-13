const db = require('../../data/db-config')

const getAll = () => {
  return db('players')
}

const getById = (id) => {
  return db('players').where('id', id).first()
}

// const getByVin = (players) => {
//   return db('cars').where('vin', vin).first()
// }

const create = (poke) => {
  return db('players').insert(poke).then(([id]) => {
    return getById(id)
  })
}

module.exports = {
  getAll,
  getById,
  create,
}