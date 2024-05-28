import { useEffect, useState } from "react"
import { useUser } from "../../../hooks"
import Comments from "../comments/Comments"
import { Avatar } from "../../shared"
import { Heart } from "../../shared/icons"
import type { Post } from "../../../types"
import { likePost } from "../../../lib/api"

const SelectedPost = ({ data }: { data: Post }) => {
  const [isLiked, setIsLiked] = useState(false)
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      const filteredLikes = data.likedBy.filter((id) => id === user._id)
      if (filteredLikes.length === 1) {
        setIsLiked(true)
      }
    }
  }, [data.likedBy, user])

  const handleLike = () => {
    if (!isLiked) {
      likePost(data._id, data.user._id)
      setIsLiked(true)
    }
  }

  const formattedDate = new Date(data.createdAt).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <section className="max-w-[728px] w-full flex flex-col gap-6 mx-auto">
      <article className="lg:rounded-lg overflow-hidden border-b lg:border border-gray-200 dark:border-neutral-800 lg:p-6 pt-6 pb-5 flex flex-col gap-4">
        <header className="flex items-center gap-3">
          <Avatar src={data.user.photo} size={40} />
          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                {data.user.username}
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
                {data.user.username}
              </span>
              <img
                src="/icons/dot.svg"
                alt="dot"
                width={5}
                height={5}
                className="hidden sm:block"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formattedDate}
              </span>
            </div>
          </div>
        </header>
        <section className="flex flex-col gap-1">
          <h2 className="font-bold text-slate-700 dark:text-slate-200 text-xl sm:text-2xl">
            {data.title}
          </h2>
          <p className="whitespace-pre-line text-slate-500 dark:text-slate-400">
            {data.text}
          </p>
        </section>
        <footer className="flex items-center gap-1">
          {!isLiked && (
            <button onClick={handleLike}>
              <Heart color="stroke-slate-600 dark:stroke-slate-500" />
            </button>
          )}
          {isLiked && <Heart color="stroke-red-600 fill-red-600" />}
          <span className="font-medium text-slate-700 dark:text-slate-400">
            {data.likes} likes
          </span>
        </footer>
        <Comments />
      </article>
    </section>
  )
}

export default SelectedPost
