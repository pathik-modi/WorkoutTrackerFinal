import db from './connection.ts'
import { Exercises, Users, WorkoutExercise } from '../../models/fruit.ts'

// get all users
export async function getAllUsers(): Promise<Users[]> {
  return db('users').select()
}

// get all exercises
export async function getAllExercises(): Promise<Exercises[]> {
  return db('exercises').select()
}

// get all workouts
export async function getAllWorkouts(): Promise<Exercises[]> {
  return db('workouts').select()
}

// get all workoutExercise
export async function getAllWorkoutExercise(): Promise<WorkoutExercise[]> {
  return db('workoutExercise').select()
}
