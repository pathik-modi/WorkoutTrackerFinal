export async function seed(knex) {
  await knex('users').insert([
    {
      name: 'Pathik',
    },
  ])
}
