import { twMerge } from "tailwind-merge"

const Sidebar = ({ active }) => {
  return (
    <svg
      className="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        className={twMerge(
          active ? "stroke-blue-600" : "stroke-slate-700 dark:stroke-slate-300"
        )}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11 9h6m-6 3h6m-6 3h6M7 9h0m0 3h0m0 3h0M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Z"
      />
    </svg>
  )
}

export default Sidebar
