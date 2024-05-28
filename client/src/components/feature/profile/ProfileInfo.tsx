import { Link } from "react-router-dom"
import { Write } from "../../shared/icons"
import { User } from "../../../types"

const ProfileInfo = ({ user }: { user: User }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex items-start justify-between">
        <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-slate-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
          <img src={user.photo} className="w-full h-full" />
        </div>
        <Link
          to="/settings"
          className="md:hidden button-icon sm:button-primary text-base flex items-center gap-1"
        >
          <Write />
          <span className="hidden sm:block">Edit Profile</span>
        </Link>
      </div>
      <div className="flex justify-between items-start flex-1 pt-4 md:pt-0 md:pl-10">
        <div>
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-3xl text-slate-700 dark:text-slate-200">
              {user.nickname}
            </h2>
          </div>
          <span className="text-sm text-slate-500 font-medium dark:text-slate-400">
            @{user.username}
          </span>
          <p className="mt-3 text-slate-600 dark:text-slate-400">{user.bio}</p>
        </div>
        <Link
          to="/settings"
          className="hidden button-primary text-base min-w-32 md:flex justify-center"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  )
}

export default ProfileInfo
