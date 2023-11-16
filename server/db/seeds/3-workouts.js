export async function seed(knex) {
  await knex('workouts').insert([
    {
      id: 1,
      date: '12/11/2023',
      userId: 1,
    },
    {
      id: 2,
      date: '12/11/2023',
      userId: 2,
    },
    {
      id: 3,
      date: '12/11/2023',
      userId: 3,
    },
  ])
}
