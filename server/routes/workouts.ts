import { Router } from 'express'
import { getAllUsers } from '../db/workouts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server Error' })
  }
})

export default router
