import { Link } from 'react-router-dom'
import { useGetAllUsers } from '../hooks/useFruits'

function SelectUser() {
  const { data } = useGetAllUsers()
  return (
    <>
      <div>
        <h2>Select User</h2>
        <ul>
          {data?.map((users) => (
            <li key={users.id}>
              <Link to={`dashboard/${users.id}`}>{users.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default SelectUser
