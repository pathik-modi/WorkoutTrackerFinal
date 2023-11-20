import { Router } from 'express'
import {
  addWorkout,
  addWorkoutExercise,
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
router.get('/workoutExercise/:workoutId', async (req, res) => {
  const workoutId = Number(req.params.workoutId)
  try {
    const workoutExercise = await getWorkoutExercise(workoutId)
    res.json(workoutExercise)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

// add exercise to workoutExercise table
router.post('/workoutExercise/:workoutId', async (req, res) => {
  try {
    const workoutId = Number(req.params.workoutId)
    const { exerciseId, set, weight } = req.body
    await addWorkoutExercise({
      workoutId,
      exerciseId,
      set,
      weight,
    })
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server Error' })
  }
})

export default router
