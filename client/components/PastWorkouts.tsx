import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { getUserWorkouts } from '../apis/workouts'
import { Workouts } from '../../models/fruit'

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
      <div>
        <h2>Past Workouts - {data[0].userName}</h2>
        <div className="userNames">
          {data.map((p: Workouts) => (
            <div key={p.workoutId}>
              <Link to={`/workoutExercise/${p.workoutId}`}>{p.date}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default PastWorkouts
