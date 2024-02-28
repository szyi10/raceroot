import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks } from "../config/constants"

import UserContext from "../context/user-context"
import UIContext from "../context/ui-context"

import { hamburger, search } from "../assets/icons"
import { avatar1 } from "../assets/images"
import ThemeSwitcher from "./ThemeSwitcher"
import Write from "./icons/Write"

const Navbar = () => {
  const userCtx = useContext(UserContext)
  const uiCtx = useContext(UIContext)
  const { pathname } = useLocation()

  const handleOpenMenu = () => uiCtx.setMenu(true)
  const handleToggle = () => uiCtx.setPopper((prevState) => !prevState)

  return (
    <header className="w-full h-20 border-b border-gray-200 shadow-sm flex items-center">
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
            <img src="logo.svg" alt="Raceroot Logo" height={35} width={35} />
            <span className="hidden xs:block font-extrabold text-2xl md:text-3xl text-gray-900 font-kanit tracking-wide">
              raceroot
            </span>
          </a>
        </div>
        <div className="hidden xl:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="button-ghost text-slate-500"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="hidden md:block button-icon">
            <img src={search} alt="Search icon" width={24} height={24} />
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
                className="aspect-square object-cover rounded-full cursor-pointer w-10 h-10 bg-sky-300 flex items-center justify-center overflow-hidden"
              >
                <img src={avatar1} width={40} height={40} />
              </button>
            </>
          )}
          {!userCtx.isLoggedIn && (
            <>
              <Link to="/auth#login" className="hidden md:block button-ghost">
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
