import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

import { logoWhite, googleLogin, githubLogin } from "../../assets/icons"

const Signup = ({ changeMode }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmit = async (data) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:3000/api/v1/users/signup",
        data: {
          name: data.username,
          email: data.email,
          password: data.password,
        },
        withCredentials: true,
      })

      if (res.data.status === "success") {
        toast.success("Account created!", {
          icon: false,
          className: "text-slate-700 font-medium font-sans",
          progressClassName: "bg-green-600",
        })
        location.assign("/auth#login")
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <section className="flex w-full h-full">
      <div className="hidden lg:block lg:w-1/3 bg-emerald-600 px-20 py-10">
        <a href="/" className="flex items-center gap-2 cursor-pointer mb-8">
          <img src={logoWhite} alt="Raceroot Logo" height={35} width={35} />
          <span className="font-extrabold text-3xl text-white font-kanit tracking-wide">
            raceroot
          </span>
        </a>
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
            <button className="relative button-primary w-full flex justify-center">
              <img
                src={googleLogin}
                alt="Google icon"
                width={20}
                height={20}
                className="absolute left-3"
              />
              Sign in with Google
            </button>
            <button className="relative button bg-slate-200 text-slate-700 hover:bg-blue-100  w-full flex justify-center">
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
              <label className="font-semibold">Username</label>
              <input
                {...register("username", {
                  required: true,
                  minLength: 3,
                })}
                type="text"
                className={`input ${
                  errors?.username && "bg-red-200 focus:bg-red-200"
                }`}
              />
              {errors?.username?.type === "required" && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Username is required.
                </p>
              )}
              {errors?.username?.type === "minLength" && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Username must be longer than 3 characters.
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1 w-full relative">
              <label className="font-semibold">Email Address</label>
              <input
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                type="text"
                className={`input ${
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
              <label className="font-semibold">Password</label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                })}
                type="password"
                placeholder="+8 characters"
                className={`input placeholder:text-slate-400 ${
                  errors?.password && "bg-red-200 focus:bg-red-200"
                }`}
              />
              {errors?.password?.type === "required" && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Password is required.
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                  Password must be longer than 8 characters.
                </p>
              )}
            </div>
            <button className="button-primary flex justify-center w-full sm:w-1/2 font-semibold py-4">
              Sign Up
            </button>
          </form>
        </div>
        <a
          href="#login"
          className="absolute bottom-8 lg:top-10 lg:right-20 h-max"
        >
          Already a member?{" "}
          <span onClick={changeMode} className="text-blue-600 cursor-pointer">
            Sign in
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

export default Signup
