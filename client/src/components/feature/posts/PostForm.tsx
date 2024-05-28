import { useState } from "react"
import { TextInput } from "../../shared"
import { useUser } from "../../../hooks"
import { createPost } from "../../../lib/api"
import { useNavigate } from "react-router-dom"

const PostForm = () => {
  const [inputValue, setInputValue] = useState({
    title: "",
    text: "",
  })

  const { title, text } = inputValue
  const { user } = useUser()
  const navigate = useNavigate()

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setInputValue({
      ...inputValue,
      [name.toLowerCase()]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!user) {
      console.log("User not authenticated")
      return
    }

    createPost({
      ...inputValue,
      user: user._id,
    })

    setInputValue({
      ...inputValue,
      title: "",
      text: "",
    })

    navigate("/feed")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[728px] w-full flex flex-col gap-6 mx-auto py-6 sm:px-4 md:border md:border-gray-200 dark:border-neutral-800 md:rounded-lg"
    >
      <div>
        <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Create a Post
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <TextInput label="Title" value={title} onChange={handleOnChange} />
        <div className="flex flex-col gap-1 w-full relative">
          <label className="font-semibold text-slate-900 dark:text-slate-300">
            Text
          </label>
          <textarea
            name="text"
            maxLength={1000}
            rows={8}
            className="input"
            value={text}
            onChange={handleOnChange}
          ></textarea>
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
  )
}

export default PostForm
