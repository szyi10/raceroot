import { useContext } from "react"
import { twMerge } from "tailwind-merge"
import { navLinks } from "../config/constants"
import UIContext from "../context/ui-context"

import CloseMenu from "./icons/CloseMenu"

const MobileNav = () => {
  const uiCtx = useContext(UIContext)

  const handleCloseMenu = () => uiCtx.setMenu(false)

  return (
    <>
      <div
        className={twMerge(
          "fixed inset-0 z-50 bg-slate-950 transition-opacity",
          uiCtx.menuOpened
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      />
      <div
        className={twMerge(
          "fixed top-0 bottom-0 flex flex-col z-50 w-[323px] bg-white dark:bg-neutral-900 transition-all",
          uiCtx.menuOpened ? "left-0" : "-left-[323px]"
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-neutral-800 shadow-sm p-4 min-h-[80px]">
          <a href="/" className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo.svg"
              alt="Raceroot"
              height={35}
              width={35}
              loading="lazy"
            />
            <span className="font-extrabold text-3xl text-gray-900 dark:text-white font-kanit tracking-wide">
              raceroot
            </span>
          </a>
          <button
            className="flex items-center justify-center p-2"
            onClick={handleCloseMenu}
          >
            <CloseMenu />
          </button>
        </div>
        <nav className="py-4 px-3">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 px-3 w-full cursor-pointer transition-colors duration-150 ease-in-out md:hover:bg-slate-100 text-lg font-semibold text-slate-600 rounded-lg dark:text-slate-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
