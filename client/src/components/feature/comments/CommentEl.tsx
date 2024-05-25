import { Link } from "react-router-dom"
// import { Heart } from "../shared/icons"
import { Avatar } from "../../shared"
import type { Comment } from "../../../types"

const Comment = ({ data }: { data: Comment }) => {
  return (
    <article className="flex flex-col gap-1">
      <div className="flex gap-3">
        <Link to={`/user/${data.user._id}`}>
          {/* TODO: Add src */}
          <Avatar size={40} />
        </Link>
        <div className="flex flex-grow flex-col min-w-0 gap-0.5 sm:gap-0">
          <div className="flex items-center gap-1">
            <Link
              to={`/user/${data.user._id}`}
              className="text-slate-700 font-semibold text-sm max-w-[10rem] sm:max-w-xs truncate dark:text-slate-200"
            >
              {data.user.username}
            </Link>
          </div>
          <p className="text-slate-500 leading-[1.375rem] mt-1 whitespace-pre-line dark:text-slate-400">
            {data.text}
          </p>
          {/* TODO: Make likes and replies */}
          {/* <div className="flex items-center gap-1.5 -ml-1.5 mt-2">
            <div className="flex items-center gap-0.5">
              <button className="cursor-not-allowed">
                <Heart color="stroke-slate-600 dark:stroke-slate-500" />
              </button>
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                0
              </span>
            </div>
            <img
              src="/icons/dot.svg"
              alt="dot"
              width={5}
              height={5}
              className="hidden sm:block"
            />
            <button className="text-sm text-slate-500 font-semibold hover:underline cursor-not-allowed dark:text-slate-400">
              Reply
            </button>

            {data.replies && (
              <>
                <img
                  src='/icons/dot.svg'
                  alt="dot"
                  width={5}
                  height={5}
                  className="hidden sm:block"
                />
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {data.replies} replies
                </span>
              </>
            )}
          </div> */}
        </div>
      </div>
    </article>
  )
}

export default Comment
