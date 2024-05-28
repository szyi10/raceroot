import { Link } from "react-router-dom"
import FeedAside from "../feed/FeedAside"
import { Avatar } from "../../shared"
import type { User } from "../../../types"

const PostAside = ({ data }: { data: User }) => {
  return (
    <aside className="hidden xl:flex max-w-[348px] w-full sticky -top-[53%] flex-col gap-6">
      <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 w-full flex flex-col justify-start gap-3.5 py-5 px-6">
        <div className="flex flex-col items-center gap-4">
          <Link to={`/user/${data._id}`}>
            <Avatar src={data.photo} size={96} />
          </Link>
          <div className="flex flex-col items-center gap-1.5 mb-2.5 text-center">
            <div className="flex items-center">
              <a
                href="#"
                className="text-lg font-semibold text-slate-700 dark:text-slate-200 line-clamp-1"
              >
                {data.username}
              </a>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {data.username}
            </p>
          </div>
        </div>
        <Link to={`/user/${data._id}`}>
          <button className="button border border-blue-700 text-blue-700 w-full flex items-center justify-center hover:bg-blue-50 dark:hover:bg-neutral-900">
            <img src="/icons/user.svg" alt="User" width={24} height={24} /> View
            profile
          </button>
        </Link>
      </div>
      <FeedAside />
    </aside>
  )
}

export default PostAside
