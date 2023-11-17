export interface Users {
  id?: number
  name?: string
}

export interface Exercises {
  id?: number
  name?: string
}

export interface Workouts {
  id?: number
  date?: string
  userId?: number
}

export interface WorkoutExercise {
  id?: number
  workoutId?: number
  exerciseId?: number
  set?: number
  weight?: number
}
