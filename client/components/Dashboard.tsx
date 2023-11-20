import { Link, Outlet, useParams } from 'react-router-dom'
import PastWorkouts from './PastWorkouts'
import { addWorkout } from '../apis/workouts'
import { useState } from 'react'

function Dashboard() {
  const { id } = useParams()
  console.log(`Dashboard: ${id}`)
  const [workoutId, setWorkoutId] = useState()

  async function startNewWorkout() {
    const userId = Number(id)
    const date = new Date().toLocaleDateString('en-GB')
    const { workoutId } = await addWorkout({ date, userId })
    const newWorkoutId = Number(workoutId)
    setWorkoutId(newWorkoutId)
  }

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <div>
          <div className="dashboardButtons">
            <Link to={`/workoutExercise/${workoutId}`}>
              <button onClick={startNewWorkout}>Start Workout</button>
            </Link>
          </div>
        </div>
        <div>
          <div className="dashboardButtons">
            <Link to={`/${id}/pastWorkouts`}>Past Workouts</Link>
          </div>
        </div>
        <div>
          <div className="dashboardButtons">
            <Link to={'/'}>Stats</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
