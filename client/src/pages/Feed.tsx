import { Link } from "react-router-dom"
import { useUser } from "../hooks"
import GlobalStyle from "../components/GlobalStyle"

const Feed = () => {
  const { isUser, user, logout } = useUser()

  return (
    <GlobalStyle>
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
    </GlobalStyle>
  )
}

export default Feed
