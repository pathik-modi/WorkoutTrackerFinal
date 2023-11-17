import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../apis/workouts.ts'

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => getAllUsers(),
  })
  if (isLoading) {
    return 'loading...'
  }

  if (error) {
    return 'An error has occurred: ' + error
  }

  return (
    <>
      <h2>homepage with buttons</h2>
      {/* <ul>{data?.map((users) => <li key={users.id}>{users.name}</li>)}</ul> */}
    </>
  )
}
export default Home
