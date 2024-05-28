import { Link } from "react-router-dom"
import { useProfileMenu, useUser } from "../../../hooks"
import Avatar from "./Avatar"

const UserOption = () => {
  const { user } = useUser()
  const { setProfileMenu } = useProfileMenu()
  const closeMenu = () => setProfileMenu(false)

  return (
    <Link
      onClick={closeMenu}
      to={`/user/${user?._id}`}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
    >
      <div className="flex gap-3">
        {/* TODO: add src */}
        <Avatar size={48} />
        <div className="flex flex-col flex-1 min-w-0 justify-between items-center">
          <p className="w-full text-base truncate font-bold text-slate-700 dark:text-slate-200">
            {user?.username}
          </p>
          <p className="text-sm font-medium truncate text-slate-500 w-full dark:text-slate-400">
            {user?.role}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default UserOption
