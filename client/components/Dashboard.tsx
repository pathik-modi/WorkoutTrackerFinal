import { Link, Outlet, useParams } from 'react-router-dom'
import PastWorkouts from './PastWorkouts'
import { addWorkout } from '../apis/workouts'

function Dashboard() {
  const { id } = useParams()
  console.log(`Dashboard: ${id}`)

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <div>
          <div className="dashboardButtons">
            <Link to={`/newWorkout/${id}`}>Start Workout</Link>
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
