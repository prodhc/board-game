exports.up = function(knex) {
    return knex.schema.createTable('players', tbl => {
        tbl.increments()

        tbl.string('name', 25).notNullable()

        tbl.integer('gold')

        tbl.integer('water')

        tbl.integer('food')

        tbl.integer('people')

    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('players')
}