export interface Users {
  id?: number
  name?: string
}

export interface Exercises {
  id?: number
  name?: string
}

export interface Workouts {
  workoutId?: number
  date?: string
  userId?: number
  userName?: string
}

export interface WorkoutExerciseInterface {
  workoutExerciseId?: number
  workoutId?: number
  workoutUserId?: number
  usersName?: string
  workoutDate?: string
  exerciseId?: number
  exercisesName?: string
  set?: number
  weight?: number
}
