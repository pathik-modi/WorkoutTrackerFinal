import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getUserWorkouts } from '../apis/workouts'

function PastWorkouts() {
  const { id } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['userWorkouts'],
    queryFn: () => getUserWorkouts(Number(id)),
  })
  if (isLoading) {
    return 'Loading...'
  }
  if (error) {
    return 'An error has occurred: ' + error
  }

  console.log(data)

  return (
    <>
      <p>All Past Workouts - {data[0].name}</p>
      <div>
        {data.map((p) => (
          <div key={p.date}>{p.date}</div>
        ))}
      </div>
    </>
  )
}
export default PastWorkouts
