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
export async function getUserWorkouts(userId: number): Promise<Workouts[]> {
  return db('workouts')
    .join('users', 'workouts.userId', 'users.id')
    .where('workouts.userId', userId)
    .select()
}

// add newWorkout
interface AddWorkout {
  date: string
  userId: number
}
export async function addWorkout({ date, userId }: AddWorkout) {
  return await db('workouts').insert({ date, userId })
}

// get a list of all Exercises
export async function getAllExercises(): Promise<Exercises[]> {
  return db('exercises').select()
}

// get exercises for a workoutId
export async function getWorkoutExercise(workoutId: number) {
  return db('workoutExercise')
    .join('workouts', 'workouts.id', 'workoutExercise.workoutId')
    .where('workoutExercise.workoutId', workoutId)
    .select()
}
