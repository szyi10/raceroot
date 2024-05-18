import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import axios from "axios"
import { toast } from "react-toastify"

const useUser = () => {
  const [username, setUsername] = useState("")
  const [cookies, removeCookie] = useCookies(["token"])
  const navigate = useNavigate()

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login")
      }

      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      )

      const { status, user } = data
      setUsername(user)

      return status
        ? toast(`Hello ${user}`, {
            position: "bottom-right",
          })
        : (removeCookie("token", ""), navigate("/login"))
    }

    verifyCookie()
  }, [cookies, navigate, removeCookie])

  const logout = () => {
    removeCookie("token", "")
    navigate("/signup")
  }

  return { username, logout }
}

export default useUser
