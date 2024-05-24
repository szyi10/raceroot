import { Link } from "react-router-dom"

type MenuProps = {
  icon: React.ReactNode
  label: string
  href?: string
  asLink?: boolean
  onClick?: () => void
}

const MenuOption = ({
  icon,
  label,
  href,
  asLink = false,
  onClick,
}: MenuProps) => {
  const optionBody = (
    <div className="flex items-center gap-2">
      <div className="hidden sm:block w-5 h-5">
        <div className="flex">{icon}</div>
      </div>
      <div className="sm:hidden block w-6 h-6">
        <div className="flex">{icon}</div>
      </div>
      <p className="truncate text-slate-600 sm:text-sm dark:text-slate-400">
        {label}
      </p>
    </div>
  )

  if (asLink && href) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      >
        {optionBody}
      </Link>
    )
  }

  return (
    <div
      onClick={onClick}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
    >
      {optionBody}
    </div>
  )
}

export default MenuOption
