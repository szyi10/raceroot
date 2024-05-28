import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { useUser } from "../hooks"
import { EmailInput, PasswordInput, TextInput } from "../components/shared"

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  })
  const navigate = useNavigate()

  const { isUser } = useUser()

  if (isUser) {
    navigate("/feed")
  }

  const { email, password, username } = inputValue

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setInputValue({
      ...inputValue,
      [name.toLowerCase()]: value,
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
        "https://raceroot-9996db14f64a.herokuapp.com/api/auth/signup",
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
    <main className="absolute top-0 left-0 h-screen w-full bg-white flex items-center justify-center">
      <section className="flex w-full h-full">
        <div className="hidden lg:block lg:w-1/3 bg-emerald-600 px-20 py-10">
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
            New Racer? Dive into the Racing Action – Register Now!
          </h1>
        </div>
        <div className="relative w-full lg:w-2/3 py-10 px-4 xs:px-10 sm:px-20 flex items-center justify-center">
          <div className="max-w-lg w-full">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center sm:text-left">
              Sign up to Raceroot
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
                  src=""
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
              <TextInput
                label="Username"
                value={username}
                onChange={handleOnChange}
              />
              <EmailInput value={email} onChange={handleOnChange} />
              <PasswordInput
                placeholder="+8 characters"
                value={password}
                onChange={handleOnChange}
              />
              <button className="button-primary flex justify-center w-full sm:w-1/2 font-semibold py-4">
                Sign Up
              </button>
            </form>
          </div>
          <span className="absolute bottom-8 lg:top-10 lg:right-20 h-max">
            Already a member?{" "}
            <Link to="/login" className="text-blue-600 cursor-pointer">
              Sign in
            </Link>
          </span>
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer absolute top-6 lg:hidden"
          >
            <img src="logo.svg" alt="Raceroot Logo" height={35} width={35} />
            <span className="font-extrabold text-3xl text-gray-900 font-kanit tracking-wide">
              raceroot
            </span>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Signup
