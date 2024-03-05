import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { logoWhite, googleLogin, githubLogin } from "../../assets/icons"

const Login = ({ changeMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmit = async (data) => {
    try {
      const { email, password } = data

      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/users/login`,
        data: { email, password },
        withCredentials: true,
      })

      if (res.data.status === "success") {
        console.log(res)
        toast.success("Logged in!", {
          icon: false,
          className: "text-slate-700 font-medium font-sans",
          progressClassName: "bg-green-600",
        })
        location.assign("/feed")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className="flex w-full h-full">
      <div className="hidden lg:block lg:w-1/3 bg-blue-600 px-20 py-10">
        <a href="/" className="flex items-center gap-2 cursor-pointer mb-8">
          <img src={logoWhite} alt="Raceroot Logo" height={35} width={35} />
          <span className="font-extrabold text-3xl text-white font-kanit tracking-wide">
            raceroot
          </span>
        </a>
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
                src={googleLogin}
                alt="Google icon"
                width={20}
                height={20}
                className="absolute left-3"
              />
              Sign in with Google
            </button>
            <button className="relative button bg-slate-200 text-slate-700 hover:bg-blue-100  w-full flex justify-center cursor-not-allowed">
              <img
                src={githubLogin}
                alt="Google icon"
                width={20}
                height={20}
                className="absolute left-3"
              />
              Sign in with Github
            </button>
          </div>
          <div className="relative flex py-8 items-center">
            <div className="flex-grow border-t border-slate-300"></div>
            <span className="flex-shrink mx-4 text-slate-400">Or</span>
            <div className="flex-grow border-t border-slate-300"></div>
          </div>
          <form
            onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col items-start gap-6"
          >
            <div className="flex flex-col gap-1 w-full relative">
              <label className="font-semibold">Email Address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                className={`input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800 ${
                  errors?.email && "bg-red-200 focus:bg-red-200"
                }`}
              />
              {errors?.email && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Valid email address is required.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full relative">
              <div className="flex items-center justify-between">
                <label className="font-semibold">Password</label>
                <a href="#" className="text-sm font-medium text-blue-600">
                  Forgot password?
                </a>
              </div>
              <input
                {...register("password", {
                  required: true,
                })}
                type="password"
                className={`input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800 ${
                  errors?.password?.type === "required" &&
                  "bg-red-200 focus:bg-red-200"
                }`}
              />
              {errors?.password?.type === "required" && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Password is required.
                </p>
              )}
            </div>
            <button className="button-primary flex justify-center w-full sm:w-1/2 font-semibold py-4">
              Sign In
            </button>
          </form>
        </div>
        <a
          href="#signup"
          className="absolute bottom-20 lg:top-10 lg:right-20 h-max"
        >
          Not a member?{" "}
          <span onClick={changeMode} className="text-blue-600 cursor-pointer">
            Sign up now
          </span>
        </a>
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
  )
}

export default Login
