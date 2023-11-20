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
      <form onSubmit={handleExerciseSubmit}>
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
          <option value={3}>BenchPress</option>
        </select>
        <input type="number" name="set" placeholder="Set" min="1" />
        <label htmlFor="weight">
          <input type="number" name="weight" placeholder="Weight" min="1" />
          kg
        </label>
        <button type="submit">--Add--</button>
      </form>
    </>
  )
}

export default AddWorkoutExercise
