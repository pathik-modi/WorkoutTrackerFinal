import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { getWorkoutExercise } from '../apis/workouts'
import { WorkoutExerciseInterface } from '../../models/fruit'
import AddWorkoutExercise from './AddWorkoutExercise'

function WorkoutExercise() {
  const { workoutId } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['workoutExercise'],
    queryFn: () => getWorkoutExercise(Number(workoutId)),
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
        <h3>
          <p>User: {data[0].usersName}</p>
          <p>Date: {data[0].workoutDate}</p>
        </h3>
      </div>
      <div>
        <AddWorkoutExercise workoutId={data[0].workoutId} />
      </div>

      <table className="workoutExerciseTable">
        <thead>
          <tr>
            <th>Exercise </th>
            <th> Set </th>
            <th> Weight (kg) </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item: WorkoutExerciseInterface) => {
            return (
              <tr key={item.workoutExerciseId}>
                <td> {item.exercisesName} </td>
                <td> {item.set} </td>
                <td> {item.weight} </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default WorkoutExercise
