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
    setWorkoutId(Number(workoutId))
  }

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <div>
          <div className="dashboardButtons">
            <button
              onClick={startNewWorkout}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                color: '#EFE6D1',
              }}
            >
              <Link to={`/workoutExercise/${workoutId}`}>Start Workout</Link>
            </button>
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
