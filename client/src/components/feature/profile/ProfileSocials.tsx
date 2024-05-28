import { User } from "../../../types"

const ProfileSocials = ({ user }: { user: User }) => {
  const formattedDate = new Date(user.createdAt).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <div className="w-full border border-gray-200 rounded-lg py-2 sm:py-4 px-3 sm:px-6 flex items-center justify-center dark:border-neutral-800">
      <div>{/* social links */}</div>
      <div className="flex items-center gap-1">
        <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400">
          Member Since {formattedDate}
        </p>
      </div>
    </div>
  )
}

export default ProfileSocials
