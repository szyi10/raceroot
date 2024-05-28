import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import axios from "axios"
import type { User } from "../types"

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isUser, setIsUser] = useState(false)
  const [cookies, removeCookie] = useCookies(["token"])
  const navigate = useNavigate()

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        return
      }

      const { data } = await axios.post(
        "http://localhost:4000/api/auth",
        {},
        { withCredentials: true }
      )

      const { status, user } = data
      setUser({
        _id: user._id,
        username: user.username,
        photo: user.photo,
        nickname: user.nickname,
        bio: user.bio,
      })
      setIsUser(true)

      if (!status) {
        return removeCookie("token", ""), setIsUser(false), navigate("/login")
      }
    }

    verifyCookie()
  }, [cookies, navigate, removeCookie])

  const logout = () => {
    removeCookie("token", "")
    navigate("/signup")
  }

  return { user, isUser, logout }
}

export default useUser
