import { Link } from "react-router-dom"
import { useUser } from "../hooks"

const Feed = () => {
  const { isUser, user, logout } = useUser()

  return (
    <div>
      {isUser && (
        <>
          <h3>Hello {user?.username}!</h3>
          <button onClick={logout} className="button bg-red-500 text-white">
            Logout
          </button>
        </>
      )}
      {!isUser && (
        <>
          <h4>To gain full acces create create accout!</h4>
          <Link to="/signup">
            <button className="button bg-blue-500 text-white">Sign In</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Feed
