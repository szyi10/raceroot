import { twMerge } from "tailwind-merge"

const Heart = ({ color }) => {
  return (
    <div className="group/heart hover:bg-red-100 dark:hover:bg-red-950 p-1 rounded-full">
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          className={twMerge(
            "group-hover/heart:stroke-red-500",
            !color ? "stroke-slate-500" : color
          )}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
        />
      </svg>
    </div>
  )
}

export default Heart
