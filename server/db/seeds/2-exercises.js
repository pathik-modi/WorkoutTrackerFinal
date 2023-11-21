export async function seed(knex) {
  await knex('exercises').insert([
    {
      name: 'Squats',
    },
    {
      name: 'Lunges',
    },
    {
      name: 'Deadlifts',
    },
    {
      name: 'Lat Pulldowns',
    },
    {
      name: 'Lat Rows',
    },
    {
      name: 'Bench Press(flat)',
    },
    {
      name: 'Incline Bench Press',
    },
    {
      name: 'Overhead Shoulder Press',
    },
    {
      name: 'Lateral Raise',
    },
    {
      name: 'Bicep Curls',
    },
    {
      name: 'Overhead Dumbell Extension',
    },
  ])
}
