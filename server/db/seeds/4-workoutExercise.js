export async function seed(knex) {
  await knex('workoutExercise').insert([
    {
      workoutId: 1,
      exerciseId: 1,
      set: 1,
      weight: 100,
    },
    {
      workoutId: 2,
      exerciseId: 1,
      set: 1,
      weight: 90,
    },
    {
      workoutId: 3,
      exerciseId: 1,
      set: 1,
      weight: 9000,
    },
  ])
}
