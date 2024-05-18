import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import useUser from "../hooks/useUser"

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()
  const { username } = useUser()

  if (username) {
    navigate("/")
  }

  const { email, password } = inputValue

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        { ...inputValue },
        { withCredentials: true }
      )

      const { success, message } = data
      if (success) {
        navigate("/")
        handleSuccess(message)
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
    })
  }

  return (
    <main className="absolute top-0 left-0 h-screen w-full bg-white flex items-center justify-center">
      <section className="flex w-full h-full">
        <div className="hidden lg:block lg:w-1/3 bg-blue-600 px-20 py-10">
          <Link to="/" className="flex items-center gap-2 cursor-pointer mb-8">
            <img
              src="/logo-white.svg"
              alt="Raceroot Logo"
              height={35}
              width={35}
            />
            <span className="font-extrabold text-3xl text-white font-kanit tracking-wide">
              raceroot
            </span>
          </Link>
          <h1 className="text-4xl font-extrabold opacity-70 mb-16">
            Hi There! Ready to Dive Back into the Racing Action?
          </h1>
        </div>
        <div className="relative w-full lg:w-2/3 py-10 px-4 xs:px-10 sm:px-20 flex items-center justify-center">
          <div className="max-w-lg w-full">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center sm:text-left">
              Sign in to Raceroot
            </h2>
            <div className="flex gap-4 flex-col sm:flex-row">
              <button className="relative button-primary w-full flex justify-center cursor-not-allowed">
                <img
                  src="/icons/google-login.svg"
                  alt="Google icon"
                  width={20}
                  height={20}
                  className="absolute left-3"
                />
                Sign in with Google
              </button>
              <button className="relative button bg-slate-200 text-slate-700 hover:bg-blue-100  w-full flex justify-center cursor-not-allowed">
                {/* <img
                  src="/icons/github-login.svg"
                  alt="Google icon"
                  width={20}
                  height={20}
                  className="absolute left-3"
                /> */}
                Sign in with Twitter
              </button>
            </div>
            <div className="relative flex py-8 items-center">
              <div className="flex-grow border-t border-slate-300"></div>
              <span className="flex-shrink mx-4 text-slate-400">Or</span>
              <div className="flex-grow border-t border-slate-300"></div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-start gap-6"
            >
              <div className="flex flex-col gap-1 w-full relative">
                <label htmlFor="email" className="font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  className={
                    "input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800"
                  }
                />
              </div>
              <div className="flex flex-col gap-1 w-full relative">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <Link
                    to="/login"
                    className="text-sm font-medium text-blue-600"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  className={
                    "input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800"
                  }
                />
              </div>
              <button className="button-primary flex justify-center w-full sm:w-1/2 font-semibold py-4">
                Sign In
              </button>
            </form>
          </div>
          <p className="absolute bottom-20 lg:top-10 lg:right-20 h-max">
            Not a member?{" "}
            <Link to="/signup" className="text-blue-600 cursor-pointer">
              Sign up now
            </Link>
          </p>
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer absolute top-6 lg:hidden"
          >
            <img src="logo.svg" alt="Raceroot Logo" height={35} width={35} />
            <span className="font-extrabold text-3xl text-gray-900 font-kanit tracking-wide">
              raceroot
            </span>
          </Link>
        </div>
      </section>
      <ToastContainer />
    </main>
  )
}

export default Login
