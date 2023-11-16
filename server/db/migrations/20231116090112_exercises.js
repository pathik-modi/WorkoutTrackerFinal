export async function up(knex) {
  return knex.schema.createTable('exercises', (table) => {
    table.increments('id').primary()
    table.string('name')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('exercises')
}
