import { Link } from "react-router-dom"
import { useProfileMenu } from "../../../hooks"

const PremiumOption = () => {
  const { setProfileMenu } = useProfileMenu()
  const closeMenu = () => setProfileMenu(false)

  return (
    <Link
      to={"/feed"}
      onClick={closeMenu}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
    >
      <div className="hidden sm:block mt-[0.5px] w-8 h-8">
        <img src="/icons/star.svg" alt="Premium" width={20} height={20} />
      </div>
      <div className="space-y-1">
        <p className="flex-1 text-base sm:text-sm font-semibold text-blue-600">
          Buy premium
        </p>
        <p className="text-base sm:text-sm text-slate-600 dark:text-slate-400">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>
    </Link>
  )
}

export default PremiumOption
