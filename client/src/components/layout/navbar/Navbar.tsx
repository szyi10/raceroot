import { Link } from "react-router-dom"
import { useProfileMenu, useUser } from "../../../hooks"
import { Bars, Search, Write } from "../../shared/icons"
import { Avatar } from "../../shared"

const Navbar = () => {
  const { isUser } = useUser()
  const { setProfileMenu } = useProfileMenu()

  const openProfileMenu = () => {
    console.log("a")
    setProfileMenu(true)
  }

  return (
    <header className="w-full h-20 border-b border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm flex items-center">
      <nav className="flex items-center justify-between max-container px-4">
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center py-2">
            <Bars />
          </button>

          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo.svg"
              alt="Raceroot Logo"
              height={35}
              width={35}
              loading="lazy"
            />
            <span className="hidden xs:block font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white font-kanit tracking-wide">
              raceroot
            </span>
          </a>
        </div>
        <div className="hidden xl:flex gap-6 w-1/4">
          <Link
            to="/search"
            className="button w-full border border-gray-200 dark:border-neutral-800 flex items-center cursor-text hover:bg-gray-200 transition-colors"
          >
            <Search />
            <span className="text-gray-500 ml-2">Search...</span>
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="hidden md:block xl:hidden button-icon">
            <div className="w-6 h-6">
              <Search />
            </div>
          </button>
          {isUser && (
            <>
              <Link
                to="/create"
                className="hidden md:flex button-primary gap-1 items-center"
              >
                <Write />
                <span className="hidden sm:block">New Post</span>
              </Link>
              <button
                onClick={openProfileMenu}
                className="aspect-square object-cover rounded-full cursor-pointer w-10 h-10 flex items-center justify-center overflow-hidden"
              >
                {/* TODO: add src */}
                <Avatar size={40} />
              </button>
            </>
          )}
          {!isUser && (
            <>
              <Link
                to="/login"
                className="hidden md:block button-ghost dark:text-slate-300"
              >
                Log in
              </Link>
              <Link to="/signup" className="button-primary">
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
