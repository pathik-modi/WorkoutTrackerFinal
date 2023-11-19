import { Link, Outlet, useParams } from 'react-router-dom'
import PastWorkouts from './PastWorkouts'
import { addWorkout } from '../apis/workouts'

function Dashboard() {
  const { id } = useParams()
  console.log(`Dashboard: ${id}`)

  function startNewWorkout() {
    const userId = Number(id)
    const date = String(new Date())
    addWorkout({ date, userId })
  }

  return (
    <>
      <div>
        <button onClick={startNewWorkout}>
          <Link to={`/${id}/newWorkout`}>Start Workout</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to={`/${id}/pastWorkouts`}>Past Workouts</Link>
        </button>
      </div>
      <div>
        <button>Stats</button>
      </div>
    </>
  )
}

export default Dashboard
