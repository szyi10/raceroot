import { dot } from "../../../assets/icons"
import { avatar2 } from "../../../assets/images"
import Heart from "../../../components/icons/Heart"

const Comment = ({ data }) => {
  return (
    <article className="flex flex-col gap-1">
      <div className="flex gap-3">
        <a href="#">
          <div className="flex items-center justify-center bg-blue-500 cursor-pointer w-10 h-10 rounded-full overflow-hidden">
            <img src={avatar2} alt="Avatar" />
          </div>
        </a>
        <div className="flex flex-grow flex-col min-w-0 gap-0.5 sm:gap-0">
          <a
            href="#"
            className="text-slate-700 font-semibold text-sm max-w-[10rem] sm:max-w-xs truncate"
          >
            {!data.user.displayName ? data.user.name : data.user.displayName}
          </a>
          <p className="text-slate-500 leading-[1.375rem] mt-1 whitespace-pre-line">
            {data.comment}
          </p>
          <div className="flex items-center gap-1.5 -ml-1.5 mt-2">
            <div className="flex items-center gap-0.5">
              <button className="cursor-not-allowed">
                <Heart />
              </button>
              <span className="text-sm text-slate-500 font-medium">
                {data.likes || 0}
              </span>
            </div>
            <img
              src={dot}
              alt="dot"
              width={5}
              height={5}
              className="hidden sm:block"
            />
            <button className="text-sm text-slate-500 font-semibold hover:underline cursor-not-allowed">
              Reply
            </button>

            {data.replies && (
              <>
                <img
                  src={dot}
                  alt="dot"
                  width={5}
                  height={5}
                  className="hidden sm:block"
                />
                <span className="text-sm text-slate-500">
                  {data.replies} replies
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Comment
