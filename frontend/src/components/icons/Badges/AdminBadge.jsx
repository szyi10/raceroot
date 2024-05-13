import { twMerge } from "tailwind-merge"

const AdminBadge = ({ size = "md" }) => {
  return (
    <div
      className={twMerge(
        "group/adminBadge relative rounded-full flex items-center justify-center",
        size === "md" && "w-5 h-5",
        size === "sm" && "w-4 h-4"
      )}
    >
      <svg
        className="w-5 h-5 text-red-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
          clipRule="evenodd"
        />
      </svg>

      <span className="absolute top-7 scale-0 transition-all rounded bg-slate-200 text-slate-700 font-medium dark:bg-neutral-800 dark:text-white p-2 text-xs group-hover/adminBadge:scale-100">
        Administrator
      </span>
    </div>
  )
}

export default AdminBadge
