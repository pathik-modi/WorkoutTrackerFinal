import db from './connection.ts'
import {
  Exercises,
  Users,
  WorkoutExercise,
  Workouts,
} from '../../models/fruit.ts'

// get all users
export async function getAllUsers(): Promise<Users[]> {
  return db('users').select()
}

// get workouts for a user
export async function getUserWorkouts(id: number): Promise<Workouts[]> {
  return db('workouts')
    .join('users', 'workouts.userId', 'users.id')
    .where('workouts.userId', id)
    .select()
}

// add newWorkout
interface AddWorkout {
  date: string
  userId: number
}
export async function addWorkout({ date, userId }: AddWorkout) {
  await db('workouts').insert({ date, userId })
}

// get exercises for a user
export async function getAllExercises(): Promise<Exercises[]> {
  return db('exercises').select()
}
