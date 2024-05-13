import { twMerge } from "tailwind-merge"

const JournalistBadge = ({ size = "md" }) => {
  return (
    <div
      className={twMerge(
        "group/journalistBadge relative bg-orange-600 w-5 h-5 rounded-full flex items-center justify-center",
        size === "md" && "w-5 h-5",
        size === "sm" && "w-4 h-4"
      )}
    >
      <svg
        className={twMerge(
          "text-gray-800 dark:text-white",
          size === "md" && "w-[14px] h-[14px]",
          size === "sm" && "w-3 h-3"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className="stroke-white dark:stroke-neutral-900"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6v13m0-13c-2.8-.8-4.7-1-8-1a1 1 0 0 0-1 1v11c0 .6.5 1 1 1 3.2 0 5 .2 8 1m0-13c2.8-.8 4.7-1 8-1 .6 0 1 .5 1 1v11c0 .6-.5 1-1 1-3.2 0-5 .2-8 1"
        />
      </svg>
      <span className="absolute top-7 scale-0 transition-all rounded bg-slate-200 text-slate-700 font-medium dark:bg-neutral-800 dark:text-white p-2 text-xs group-hover/journalistBadge:scale-100">
        Journalist
      </span>
    </div>
  )
}

export default JournalistBadge
