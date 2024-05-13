import { useContext, useState, useRef } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import UserContext from "../../../context/user-context"
import Editor from "./Editor"

const CreateNews = () => {
  const [text, setText] = useState("")
  const ref = useRef()
  const userCtx = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const handleTextChange = (event) => {
    setText(event)
  }

  const formSubmit = async (data) => {
    const userId = userCtx.user.data._id

    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/news`,
        data: {
          title: data.title,
          subtitle: data.subtitle,
          text: text,
          img: "xxx",
          journalist: userId,
        },
        withCredentials: true,
      })

      console.log(res)
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full flex flex-col gap-6 mx-auto py-6 sm:px-4 md:border md:border-gray-200 dark:border-neutral-800 md:rounded-lg"
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
            Create a News
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center w-full gap-6">
            <div className="flex flex-col gap-1 w-full relative">
              <label className="font-semibold text-slate-900 dark:text-slate-300">
                Title
              </label>
              <input {...register("title")} type="text" className="input" />
            </div>
            <div className="flex flex-col gap-1 w-full relative">
              <label className="font-semibold text-slate-900 dark:text-slate-300">
                Image
              </label>
              <input
                ref={ref}
                type="file"
                accept="image/*"
                name="img"
                className="input file:bg-transparent file:border-none file:text-xs file:text-slate-600"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-semibold text-slate-900 dark:text-slate-300">
              Subtitle
            </label>
            <input {...register("subtitle")} type="text" className="input" />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label className="font-semibold text-slate-900 dark:text-slate-300">
              Text
            </label>
            <Editor handleTextChange={handleTextChange} />
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button type="reset" className="button-ghost dark:text-slate-400">
            Cancel
          </button>
          <button type="submit" className="button-primary">
            Create
          </button>
        </div>
      </form>
    </main>
  )
}

export default CreateNews
