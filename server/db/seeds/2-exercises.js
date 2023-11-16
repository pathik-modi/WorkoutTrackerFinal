export async function seed(knex) {
  await knex('exercises').insert([
    {
      id: 1,
      name: 'Squats',
    },
    {
      id: 2,
      name: 'Bench Press',
    },
    {
      id: 3,
      name: 'Deadlift',
    },
  ])
}
