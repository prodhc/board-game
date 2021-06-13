const players = [
    {
        name: 'Secoya',
        gold: 100,
        water: 5,
        food: 2,
        people: 20,
    },
    {
        name: 'Arisah',
        gold: 2244,
        water: 10,
        food: 8,
        people: 100,
    },
    ]
    
    exports.seed = function(knex) {
        return knex('players').truncate().then(() => {
            return knex('players').insert(players)
        })
    }