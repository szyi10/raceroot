import { Link } from "react-router-dom"
import { Post } from "../../../types"

const TrendingPost = ({ data }: { data: Post }) => {
  return (
    <Link
      to={`/feed/post/${data.id}`}
      key={data.id}
      className="flex flex-col gap-1"
    >
      <h3 className="line-clamp-2 text-slate-700 dark:text-slate-300 font-semibold cursor-pointer">
        {data.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 h-6 font-medium">
        {data.user.username}
      </p>
    </Link>
  )
}

export default TrendingPost
