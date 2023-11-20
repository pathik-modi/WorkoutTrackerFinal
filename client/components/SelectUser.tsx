import { Link } from 'react-router-dom'
import { useGetAllUsers } from '../hooks/useFruits'

function SelectUser() {
  const { data } = useGetAllUsers()
  return (
    <>
      <div>
        <h2>User</h2>
        <div className="userNames">
          {data?.map((users) => (
            <div key={users.id}>
              <Link to={`dashboard/${users.id}`}>{users.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default SelectUser
