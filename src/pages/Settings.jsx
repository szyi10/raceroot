import { useRef } from "react"
import { useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import UserContext from "../context/user-context"

const Settings = () => {
  const ref = useRef()
  const { user } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const formSubmit = async (data) => {
    console.log(ref.current.files[0])

    console.log(data)
    try {
      const res = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/users/updateMe`,
        data: {
          displayName: data.displayName,
          bio: data.bio,
          email: data.email,
          name: data.name,
          photo: ref.current.files[0],
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      })

      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  if (!user) return

  const { displayName, bio, name, email } = user.data

  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto p-8 md:border md:border-gray-200 dark:border-neutral-800 md:rounded-lg">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-row flex-wrap w-full"
        >
          <div className="w-full lg:w-1/2 lg:pr-10">
            <h4 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-200">
              Basic Info
            </h4>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Display Name
              </label>
              <input
                {...register("displayName", {
                  value: displayName ? displayName : "",
                  minLength: 3,
                  maxLength: 30,
                })}
                type="text"
                className="input w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Profile Photo
              </label>
              <div className="flex items-center justify-center h-40 w-40">
                <label className="relative flex flex-col items-center justify-center w-full h-40 rounded-full cursor-pointer hover:bg-blue-100 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                      <span className="font-semibold">Click to upload</span>
                    </p>
                  </div>
                  <img
                    src={`${import.meta.env.VITE_DATABASE_URL}/img/users/${
                      user.data.photo
                    }`}
                    className="absolute top-0 left-0 -z-10 opacity-50 rounded-full"
                  />
                  <input
                    ref={ref}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    name="photo"
                  />
                </label>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Display Name
              </label>
              <textarea
                {...register("bio", {
                  value: bio ? bio : "",
                  minLength: 3,
                  maxLength: 150,
                })}
                rows={5}
                type="text"
                className="input w-full"
              ></textarea>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-200">
              Profile Identity
            </h4>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Name
              </label>
              <input
                {...register("name", {
                  value: name,
                  minLength: 3,
                  maxLength: 30,
                })}
                type="text"
                className="input w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200">
                Email Address
              </label>
              <input
                {...register("email", {
                  value: email,
                  minLength: 3,
                  maxLength: 30,
                })}
                type="text"
                className="input w-full"
              />
            </div>
            <h4 className="mt-10 mb-5 text-xl font-bold text-red-600">
              Danger Zone
            </h4>
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <Link
                to="/settings"
                className="button text-red-600 border border-red-600 text-base"
              >
                Change Password
              </Link>
              <Link
                to="/settings"
                className="button bg-red-600 text-white text-base"
              >
                Delete your account
              </Link>
            </div>
          </div>
          <button type="submit" className="button-primary text-base">
            Update
          </button>
        </form>
      </div>
    </main>
  )
}

export default Settings
