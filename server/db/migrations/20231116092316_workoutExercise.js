export async function up(knex) {
  return knex.schema.createTable('workoutExercise', (table) => {
    table.increments('id').primary()
    table.integer('workoutId').references('workouts.id')
    table.integer('exerciseId').references('exercises.id')
    table.integer('set')
    table.integer('weight')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('workoutExercise')
}
