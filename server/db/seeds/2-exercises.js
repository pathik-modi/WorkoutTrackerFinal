export async function seed(knex) {
  await knex('exercises').insert([
    {
      name: 'Squats',
    },
    {
      name: 'Bench Press',
    },
    {
      name: 'Deadlift',
    },
  ])
}
