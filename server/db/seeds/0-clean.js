export async function seed(knex) {
  await knex('users').del()
  await knex('exercises').del()
  await knex('workouts').del()
  await knex('workoutExercise').del()
}
