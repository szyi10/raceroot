import { ToastContainer } from "react-toastify"
import useUser from "../hooks/useUser"

const Home = () => {
  const { username, logout } = useUser()

  return (
    <>
      <div>
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={logout}>Logout</button>
      </div>
      <ToastContainer />
    </>
  )
}

export default Home
