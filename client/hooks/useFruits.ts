import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import { getAllUsers } from '../apis/workouts.ts'

export function useGetAllUsers() {
  const query = useQuery({ queryKey: ['users'], queryFn: getAllUsers })
  return {
    ...query,
  }
}

// export function useFruitsMutation<TData = unknown, TVariables = unknown>(
//   mutationFn: MutationFunction<TData, TVariables>,
// ) {
//   const queryClient = useQueryClient()
//   const mutation = useMutation(mutationFn, {
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['fruits'] })
//     },
//   })

//   return mutation
// }

// // Query functions go here e.g. useAddFruit
// /* function useAddFruit() {
//   return useFruitsMutation(addFruit)
// } */
