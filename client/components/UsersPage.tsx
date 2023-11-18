import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../apis/workouts.ts'
import PastWorkouts from './PastWorkouts.tsx'
import { useGetAllUsers } from '../hooks/useFruits.ts'
import { Link, Outlet } from 'react-router-dom'
import SelectUser from './SelectUser.tsx'

function UsersPage() {
  return (
    <>
      <div>
        <SelectUser />
      </div>
    </>
  )
}
export default UsersPage
