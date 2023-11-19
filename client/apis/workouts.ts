import request from 'superagent'
import { Users, Workouts } from '../../models/fruit'

const rootUrl = '/api/v1/workout'

// users
export async function getAllUsers(): Promise<Users[]> {
  const res = await request.get(rootUrl)
  return res.body
}

// workouts
export async function getUserWorkouts(id: number) {
  const res = await request.get(`${rootUrl}/${id}/pastWorkouts`)
  return res.body
}

// addWorkout
interface AddWorkout {
  date: string
  userId: number
}
export async function addWorkout({ date, userId }: AddWorkout) {
  return await request
    .post(`${rootUrl}/dashboard/${userId}`)
    .send({ date, userId })
}
