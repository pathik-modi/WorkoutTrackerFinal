import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import UsersPage from './components/UsersPage'
import Dashboard from './components/Dashboard'
import PastWorkouts from './components/PastWorkouts'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<UsersPage />} />
    <Route path="dashboard/:id" element={<Dashboard />} />
    <Route path="/:id/pastWorkouts" element={<PastWorkouts />} />
  </Route>,
)
