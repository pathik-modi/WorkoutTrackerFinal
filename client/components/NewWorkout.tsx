import AddWorkoutExercise from './AddWorkoutExercise'
import AllWorkoutExercise from './AllWorkoutExercise'

function NewWorkout() {
  return (
    <>
      <div>
        <div>
          <h3>user display</h3>
          <h3>date display</h3>
        </div>
        <div>
          <AddWorkoutExercise />
          <AllWorkoutExercise />
        </div>
        <div>
          <button>Finish Workout</button>
        </div>
      </div>
    </>
  )
}
export default NewWorkout
