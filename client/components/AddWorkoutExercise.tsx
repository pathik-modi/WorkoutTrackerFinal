function AddWorkoutExercise() {
  return (
    <>
      <form>
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
          <option value="squats">Squats</option>
          <option value="deadlift">Deadlifts</option>
          <option value="benchPress">BenchPress</option>
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
