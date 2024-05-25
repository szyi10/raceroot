import { useState } from "react"
import { useUser } from "../../../hooks"
import { createComment } from "../../../lib/api"
import { Avatar } from "../../shared"

type FormProps = {
  postId: string
}

const CommentForm = ({ postId }: FormProps) => {
  const [active, setActive] = useState(false)
  const [text, setText] = useState("")

  const { user } = useUser()

  const openForm = () => setActive(true)
  const closeForm = () => setActive(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setText(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (text.length < 3) {
      console.log("Comment must be longer than 3 characters")
      return
    }

    if (user && postId) {
      createComment(postId, text, user._id)
        .then(() => {
          setText("")
          setActive(false)
        })
        .catch((error) => console.log(error))
    }
  }

  if (!active) {
    return (
      <button
        onClick={openForm}
        className="flex flex-col gap-4 rounded-lg border border-slate-200 dark:border-neutral-800 p-4"
      >
        <div className="flex items-center gap-2 ">
          {/* TODO: Add src */}
          <Avatar size={32} />
          <span className="text-slate-400 text-sm leading-5">
            Add a toughtful comment
          </span>
        </div>
      </button>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg border border-slate-200 dark:border-neutral-800 p-4"
    >
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-slate-400">
          Comment as {user?.username}:
        </span>
        <textarea
          value={text}
          onChange={handleChange}
          minLength={3}
          maxLength={1000}
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
  )
}

export default CommentForm
