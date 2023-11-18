import { Link, Outlet, useParams } from 'react-router-dom'
import PastWorkouts from './PastWorkouts'

function Dashboard() {
  const { id } = useParams()
  console.log(`Dashboard: ${id}`)

  return (
    <>
      <div>
        <button>Start Workout</button>
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
