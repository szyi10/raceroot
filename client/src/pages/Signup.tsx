import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import useUser from "../hooks/useUser"

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  })
  const navigate = useNavigate()

  const user = useUser()

  if (user.username) {
    navigate("/")
  }

  const { email, password, username } = inputValue

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const handleError = (err: string) => {
    toast.error(err, {
      position: "bottom-right",
    })
  }

  const handleSuccess = (msg: string) => {
    toast.success(msg, {
      position: "bottom-right",
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        { ...inputValue },
        { withCredentials: true }
      )

      const { success, message } = data
      if (success) {
        handleSuccess(message)
        setTimeout(() => {
          navigate("/")
        }, 1000)
      } else {
        handleError(message)
      }
    } catch (error) {
      console.log(error)
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    })
  }

  return (
    <div>
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup
