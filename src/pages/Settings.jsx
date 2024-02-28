import { useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import UserContext from "../context/user-context"
import { avatar1 } from "../assets/images"

const Settings = () => {
  const { user } = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmit = (data) => {
    console.log(data)
  }

  if (!user) return

  const { displayName, bio, name, email } = user.data

  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto p-8 md:border md:border-gray-200 md:rounded-lg">
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-row flex-wrap w-full"
        >
          <div className="w-full lg:w-1/2 lg:pr-10">
            <h4 className="mb-5 text-xl font-bold text-slate-900">
              Basic Info
            </h4>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900">
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
              <label className="block mb-2 text-sm font-semibold text-slate-900">
                Profile Photo
              </label>
              <div className="relative w-40 h-40 bg-slate-100 rounded-full shadow-xl">
                <div className="overflow-hidden rounded-full h-40 w-40">
                  <img src={avatar1} alt="" />
                </div>
              </div>
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900">
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
            <h4 className="mb-5 text-xl font-bold text-slate-900">
              Profile Identity
            </h4>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-semibold text-slate-900">
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
              <label className="block mb-2 text-sm font-semibold text-slate-900">
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
