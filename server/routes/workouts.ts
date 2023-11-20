import { Router } from 'express'
import {
  addWorkout,
  getAllUsers,
  getUserWorkouts,
  getWorkoutExercise,
} from '../db/workouts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// get past workouts
router.get('/:userId/pastWorkouts', async (req, res) => {
  const userId = Number(req.params.userId)
  try {
    const userWorkouts = await getUserWorkouts(userId)
    res.json(userWorkouts)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// add workout
router.post('/newWorkout/:userId', async (req, res) => {
  const userId = Number(req.params.userId)
  const { date } = req.body
  try {
    const workoutId = await addWorkout({ date, userId })
    res.json({ workoutId: workoutId[0] })
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// show workoutExercise for workoutId
// get the workoutId & render all exercises for that workout
router.get('/:workoutId/newWorkout', async (req, res) => {
  const workoutId = Number(req.params.workoutId)
  try {
    const workoutExercise = await getWorkoutExercise(workoutId)
    res.json(workoutExercise)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

export default router
