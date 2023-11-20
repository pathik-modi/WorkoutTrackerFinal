import { useMutation, useQueryClient } from '@tanstack/react-query'

function AddWorkoutExercise(workoutId) {
  // const queryClient = useQueryClient()
  // const mutation = useMutation({
  //   mutationFn:
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['workoutExercise'])
  //   },
  // })
  async function handleExerciseSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const exerciseDetail = form.get('exercise')?.valueOf() as string
    const setDetail = form.get('set')?.valueOf() as number
    const weightDetail = form.get('weight')?.valueOf() as number
    console.log({ exerciseDetail, setDetail, weightDetail })
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
          <option value="Squats">Squats</option>
          <option value="Deadlift">Deadlifts</option>
          <option value="BenchPress">BenchPress</option>
        </select>
        <input type="number" name="set" placeholder="Set" min="1" />
        <label htmlFor="weight">
          <input type="number" name="weight" placeholder="Weight" min="1" />
          kg
        </label>
        <button>--Add--</button>
      </form>
    </>
  )
}

export default AddWorkoutExercise
