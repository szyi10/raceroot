import { useLocation } from "react-router-dom"
import CommentForm from "./CommentForm"
import { useEffect, useState } from "react"
import { getComments } from "../../../lib/api"
import { Comment } from "../../../types"
import CommentEl from "./CommentEl"

const Comments = () => {
  const [comments, setComments] = useState<Comment[] | null>(null)

  const { pathname } = useLocation()
  const postId = pathname.replace("/post/", "")

  useEffect(() => {
    getComments(postId)
      .then((data) => setComments(data))
      .catch((error) => console.log(error))
  }, [postId])

  return (
    <section className="flex flex-col gap-5">
      <CommentForm postId={postId} />
      <div className="flex flex-col gap-5">
        {!comments && (
          <p className="text-sm font-medium text-slate-500">
            No comments found.
          </p>
        )}
        {comments && (
          <h2 className="text-lg leading-7 font-semibold text-slate-700 dark:text-slate-400">
            {comments.length} comments
          </h2>
        )}
        <div className="flex flex-col gap-5">
          {comments &&
            comments.map((comment) => (
              <CommentEl key={comment._id} data={comment} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Comments
