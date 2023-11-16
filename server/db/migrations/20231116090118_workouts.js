export async function up(knex) {
  return knex.schema.createTable('workouts', (table) => {
    table.increments('id').primary()
    table.string('date')
    table.integer('userId').references('users.id')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('workouts')
}
