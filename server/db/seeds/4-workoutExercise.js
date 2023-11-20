export async function seed(knex) {
  await knex('workoutExercise').insert([
    {
      workoutId: 1,
      exerciseId: 1,
      set: 1,
      weight: 80,
    },
    {
      workoutId: 1,
      exerciseId: 1,
      set: 2,
      weight: 90,
    },
    {
      workoutId: 1,
      exerciseId: 2,
      set: 1,
      weight: 80,
    },
    {
      workoutId: 1,
      exerciseId: 2,
      set: 2,
      weight: 90,
    },
    {
      workoutId: 1,
      exerciseId: 3,
      set: 1,
      weight: 90,
    },

    {
      workoutId: 2,
      exerciseId: 1,
      set: 1,
      weight: 100,
    },
    {
      workoutId: 2,
      exerciseId: 1,
      set: 2,
      weight: 110,
    },
    {
      workoutId: 2,
      exerciseId: 2,
      set: 1,
      weight: 120,
    },
    {
      workoutId: 2,
      exerciseId: 2,
      set: 2,
      weight: 130,
    },
    {
      workoutId: 2,
      exerciseId: 3,
      set: 1,
      weight: 99,
    },
    {
      workoutId: 3,
      exerciseId: 1,
      set: 1,
      weight: 50,
    },
    {
      workoutId: 4,
      exerciseId: 1,
      set: 1,
      weight: 50,
    },
    {
      workoutId: 5,
      exerciseId: 1,
      set: 1,
      weight: 50,
    },
    {
      workoutId: 6,
      exerciseId: 1,
      set: 1,
      weight: 50,
    },
  ])
}
