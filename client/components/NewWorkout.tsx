import { useParams } from 'react-router-dom'
import AddWorkoutExercise from './AddWorkoutExercise'
import AllWorkoutExercise from './AllWorkoutExercise'
import { addWorkout } from '../apis/workouts'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

function NewWorkout() {
  const { userId } = useParams()
  useEffect(() => {
    startNewWorkout()
  }, [])

  const [newDate, setNewDate] = useState('')
  const [newWorkoutId, setNewWorkoutId] = useState()

  async function startNewWorkout() {
    const newUserId = Number(userId)
    const date = new Date().toLocaleDateString('en-GB')
    setNewDate(date)
    const { workoutId } = await addWorkout({ date, userId: newUserId })
    setNewWorkoutId(workoutId)
  }

  return (
    <>
      <div>
        <div>
          <h3>User: {userId}</h3>
          <h3>Workout Id: {newWorkoutId}</h3>
          <h3>Date: {newDate}</h3>
        </div>
        <div>
          <AddWorkoutExercise />
          <AllWorkoutExercise />
        </div>
      </div>
    </>
  )
}
export default NewWorkout
