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
  const res = await request
    .post(`${rootUrl}/newWorkout/${userId}`)
    .send({ date, userId })
  return res.body
}

// get workoutExercises by workoutId
export async function getWorkoutExercise(workoutId: number) {
  const res = await request.get(`${rootUrl}/workoutExercise/${workoutId}`)
  return res.body
}

interface FullWorkoutExercise {
  workoutId: number
  exerciseId: number
  set: number
  weight: number
}
export async function addWorkoutExercise({
  workoutId,
  exerciseId,
  set,
  weight,
}: FullWorkoutExercise) {
  return await request
    .post(`${rootUrl}/workoutExercise/${workoutId}`)
    .send({ exerciseId, set, weight })
}
