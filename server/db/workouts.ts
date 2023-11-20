import db from './connection.ts'
import {
  Exercises,
  Users,
  WorkoutExerciseInterface,
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
    .select(
      'workouts.id as workoutId',
      'workouts.date',
      'workouts.userId',
      'users.name as userName',
    )
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
export async function getWorkoutExercise(
  workoutId: number,
): Promise<WorkoutExerciseInterface[]> {
  return await db('workoutExercise')
    .join('workouts', 'workouts.id', 'workoutExercise.workoutId')
    .join('exercises', 'exercises.id', 'workoutExercise.exerciseId')
    .join('users', 'workouts.userId', 'users.id')
    .where('workoutExercise.workoutId', workoutId)
    .select(
      'workoutExercise.id as workoutExerciseId',
      'workoutExercise.workoutId',
      'workouts.userId as workoutUserId',
      'users.name as usersName',
      'workouts.date as workoutDate',
      'workoutExercise.exerciseId',
      'exercises.name as exercisesName',
      'workoutExercise.set',
      'workoutExercise.weight',
    )
}

export async function addWorkoutExercise(fullWorkoutExercise: any) {
  const { workoutId, exerciseId, set, weight } = fullWorkoutExercise
  return db('workoutExercise').insert({
    workoutId,
    exerciseId,
    set,
    weight,
  })
}
