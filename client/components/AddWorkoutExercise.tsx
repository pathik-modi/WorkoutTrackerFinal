import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { addWorkoutExercise } from '../apis/workouts'

function AddWorkoutExercise() {
  const { workoutId } = useParams()
  const numberWorkoutId = Number(workoutId)

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({
      exerciseId,
      set,
      weight,
    }: {
      exerciseId: number
      set: number
      weight: number
    }) =>
      addWorkoutExercise({
        workoutId: numberWorkoutId,
        exerciseId,
        set,
        weight,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(['workoutExercise'])
    },
  })
  async function handleExerciseSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const exerciseId = form.get('exercise')?.valueOf() as number
    const set = form.get('set')?.valueOf() as number
    const weight = form.get('weight')?.valueOf() as number
    console.log(exerciseId, set, weight)

    mutation.mutate({ exerciseId, set, weight })
    e.currentTarget.reset()
  }

  return (
    <>
      <form onSubmit={handleExerciseSubmit} className="addExerciseForm">
        <select
          name="exercise"
          id="exercise"
          required
          aria-required="true"
          defaultValue="exercise"
        >
          <option disabled value="exercise">
            Exercise
          </option>
          <option value={1}>Squats</option>
          <option value={2}>Deadlifts</option>
          <option value={3}>Deadlifts</option>
          <option value={4}>Lat Pulldowns</option>
          <option value={5}>Lat Rows</option>
          <option value={6}>Bench Press(flat)</option>
          <option value={7}>Incline Bench Press</option>
          <option value={8}>Overhead Shoulder Press</option>
          <option value={9}>Lateral Raise</option>
          <option value={10}>Bicep Curls</option>
          <option value={11}>Overhead Dumbell Extension</option>
        </select>
        <input type="number" name="set" placeholder="Set" min="1" />
        <input type="number" name="weight" placeholder="kg" min="1" />
        <button type="submit" className="addExerciseButton">
          +
        </button>
      </form>
    </>
  )
}

export default AddWorkoutExercise
