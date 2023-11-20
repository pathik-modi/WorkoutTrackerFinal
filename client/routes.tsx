import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import UsersPage from './components/UsersPage'
import Dashboard from './components/Dashboard'
import PastWorkouts from './components/PastWorkouts'
import NewWorkout from './components/NewWorkout'
import WorkoutExercise from './components/WorkoutExercise'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<UsersPage />} />
    <Route path="dashboard/:id" element={<Dashboard />} />
    <Route path="/:id/pastWorkouts" element={<PastWorkouts />} />
    <Route path="/newWorkout/:userId" element={<NewWorkout />} />
    <Route path="/workoutExercise/:workoutId" element={<WorkoutExercise />} />
  </Route>,
)
