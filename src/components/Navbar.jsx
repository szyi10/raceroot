import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../config/constants"

import UserContext from "../context/user-context"
import UIContext from "../context/ui-context"

import { hamburger } from "../assets/icons"
import { Write, Search } from "./icons"
import ThemeSwitcher from "./ThemeSwitcher"

const Navbar = () => {
  const userCtx = useContext(UserContext)
  const uiCtx = useContext(UIContext)
  const { pathname } = useLocation()

  const handleOpenMenu = () => uiCtx.setMenu(true)
  const handleToggle = () => uiCtx.setPopper((prevState) => !prevState)

  return (
    <header className="w-full h-20 border-b border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm flex items-center">
      <nav className="flex items-center justify-between max-container px-4">
        <div className="flex items-center gap-3">
          <button
            className="flex items-center justify-center py-2"
            onClick={handleOpenMenu}
          >
            <img
              src={hamburger}
              alt="hamburger"
              height={25}
              width={25}
              className="block xl:hidden"
            />
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
        <div className="hidden xl:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="button-ghost text-slate-500 dark:text-slate-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="hidden md:block button-icon">
            <div className="w-6 h-6">
              <Search />
            </div>
          </button>
          {pathname !== "/" && <ThemeSwitcher />}
          {userCtx.isLoggedIn && (
            <>
              <Link
                to="/create"
                className="button-icon sm:button-primary gap-1 items-center"
              >
                <Write />
                <span className="hidden sm:block">Create</span>
              </Link>
              <button
                onClick={handleToggle}
                className="aspect-square object-cover rounded-full cursor-pointer w-10 h-10 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`${import.meta.env.VITE_DATABASE_URL}/img/users/${
                    userCtx.user.data.photo
                  }`}
                  width={40}
                  height={40}
                />
              </button>
            </>
          )}
          {!userCtx.isLoggedIn && (
            <>
              <Link
                to="/auth#login"
                className="hidden md:block button-ghost dark:text-slate-300"
              >
                Log in
              </Link>
              <Link to="/auth#signup" className="button-primary">
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
