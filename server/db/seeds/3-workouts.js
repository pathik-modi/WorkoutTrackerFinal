export async function seed(knex) {
  await knex('workouts').insert([
    {
      date: '12/11/2023',
      userId: 1,
    },
    {
      date: '14/11/2023',
      userId: 1,
    },
  ])
}
