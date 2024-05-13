import { useState, useContext } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import UserContext from "../../../context/user-context"

import Comment from "./Comment"
import Avatar from "../../../components/Avatar"

const Comments = ({ data }) => {
  const [isFormOpened, setIsFormOpened] = useState(false)
  const { register, handleSubmit } = useForm()
  const { id } = useParams()
  const userCtx = useContext(UserContext)

  const openForm = () => setIsFormOpened(true)
  const closeForm = () => setIsFormOpened(false)

  const formSubmit = async (data) => {
    console.log(data, id)

    try {
      const res = await axios({
        method: "POST",
        url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/comments`,
        data: {
          comment: data.comment,
          post: id,
        },
        withCredentials: true,
      })

      if (res.data.status === "success") {
        console.log(res)
        toast.success("Comment created!", {
          icon: false,
          className: "text-slate-700 font-medium font-sans",
          progressClassName: "bg-green-600",
        })
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message)
    }
  }

  if (!userCtx) return

  return (
    <section className="flex flex-col gap-5">
      {!isFormOpened && (
        <button
          onClick={openForm}
          className="flex flex-col gap-4 rounded-lg border border-slate-200 dark:border-neutral-800 p-4"
        >
          <div className="flex items-center gap-2 ">
            <Avatar src={userCtx.user.data.photo} height={32} width={32} />
            <span className="text-slate-400 text-sm leading-5">
              Add a toughtful comment
            </span>
          </div>
        </button>
      )}
      {isFormOpened && (
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col gap-4 rounded-lg border border-slate-200 dark:border-neutral-800 p-4"
        >
          <div className="flex flex-col gap-2">
            <span className="text-xs font-medium text-slate-400">
              Comment as {userCtx.user.data.name}:
            </span>
            <textarea
              {...register("comment", {
                required: true,
                minLength: "3",
                maxLength: "1000",
              })}
              type="text"
              className="input leading-5 bg-transparent focus:bg-transparent px-0 resize-y dark:text-slate-300"
            />
            <div className="flex gap-2 items-center justify-end">
              <button
                onClick={closeForm}
                type="button"
                className="button-ghost dark:text-slate-400"
              >
                Cancel
              </button>
              <button type="submit" className="button-primary">
                Comment
              </button>
            </div>
          </div>
        </form>
      )}
      <div className="flex flex-col gap-5">
        <h2 className="text-lg leading-7 font-semibold text-slate-700 dark:text-slate-400">
          {data.comments.length} comments
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        {data.comments.length === 0 && (
          <p className="text-sm font-medium text-slate-500">
            No comments found.
          </p>
        )}
        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </section>
  )
}

export default Comments
