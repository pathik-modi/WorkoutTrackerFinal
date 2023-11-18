import { Router } from 'express'
import { getAllUsers, getUserWorkouts } from '../db/workouts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

router.get('/:id/pastWorkouts', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const userWorkouts = await getUserWorkouts(id)
    res.json(userWorkouts)
  } catch (err) {
    res.status(500).json({ error: 'Server Error' })
  }
})

export default router
