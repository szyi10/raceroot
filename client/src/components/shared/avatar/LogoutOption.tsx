import { useUser } from "../../../hooks"

const LogoutOption = () => {
  const { logout } = useUser()

  return (
    <button
      onClick={logout}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
    >
      <div className="flex items-center gap-2">
        <div className="hidden sm:block">
          <img
            src="/icons/logout-icon.svg"
            alt="Pen icon"
            width={20}
            height={20}
          />
        </div>
        <div className="sm:hidden block">
          <img
            src="/icons/logout-icon.svg"
            alt="Pen icon"
            width={24}
            height={24}
          />
        </div>
        <p className="truncate text-orange-600 sm:text-sm">Log out</p>
      </div>
    </button>
  )
}

export default LogoutOption
