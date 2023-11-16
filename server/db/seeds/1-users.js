export async function seed(knex) {
  await knex('users').insert([
    {
      id: 1,
      name: 'Pathik',
    },
    {
      id: 2,
      name: 'Superman',
    },
    {
      id: 3,
      name: 'Modi ji',
    },
  ])
}
