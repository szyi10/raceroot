import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import Login from "./Login"
import Signup from "./Signup"

const LoginPage = () => {
  const { hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!hash) navigate("/auth#login")
  }, [hash, navigate])

  return (
    <main className="absolute top-0 left-0 h-screen w-full bg-white flex items-center justify-center">
      {hash === "#login" && <Login />}
      {hash === "#signup" && <Signup />}
    </main>
  )
}

export default LoginPage
