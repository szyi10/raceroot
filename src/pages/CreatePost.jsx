import { useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import UserContext from "../context/user-context"

const CreatePost = () => {
  const userCtx = useContext(UserContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const formSubmit = async (data) => {
    console.log(userCtx.user.data._id)
    console.log(data.text)
    const userId = userCtx.user.data._id

    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/posts`,
        data: {
          title: data.title,
          text: data.text,
          user: userId,
        },
        withCredentials: true,
      })

      if (res.data.status === "success") {
        const postId = res.data.data.data.id

        toast.success("Post created!", {
          icon: false,
          className: "text-slate-700 font-medium font-sans",
          progressClassName: "bg-green-600",
        })
        location.assign(`/feed/post/${postId}`)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="max-w-[728px] w-full flex flex-col gap-6 mx-auto py-6 px-4 md:border md:border-gray-200 md:rounded-lg"
      >
        <div>
          <h2 className="text-2xl font-semibold text-slate-700">
            Create a Post
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 w-full relative">
            <label className="font-semibold">Title</label>
            <input
              {...register("title", {
                required: true,
                minLength: 3,
                maxLength: 50,
              })}
              type="text"
              className={`input ${
                errors?.title && "bg-red-200 focus:bg-red-200"
              }`}
            />
            {errors?.title?.type === "required" && (
              <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                Title is required.
              </p>
            )}
            {errors?.title?.type === "minLength" && (
              <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                Title must be longer than 3 characters.
              </p>
            )}
            {errors?.title?.type === "maxLength" && (
              <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                Title must be shorter than 50 characters.
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full relative">
            <label className="font-semibold">Text</label>
            <textarea
              {...register("text", {
                required: true,
                maxLength: 1000,
              })}
              type="text"
              rows={8}
              className={`input ${
                errors?.text && "bg-red-200 focus:bg-red-200"
              }`}
            ></textarea>
            {errors?.text?.type === "required" && (
              <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                Text is required.
              </p>
            )}
            {errors?.text?.type === "maxLength" && (
              <p className="absolute -bottom-5 text-sm font-medium text-red-500">
                Text must be shorter than 1000 characters.
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button type="reset" className="button-ghost">
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

export default CreatePost
