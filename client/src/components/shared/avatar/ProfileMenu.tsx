import { twMerge } from "tailwind-merge"
import { useProfileMenu, useUser } from "../../../hooks"
import UserOption from "./UserOption"
import PremiumOption from "./PremiumOption"
import LogoutOption from "./LogoutOption"
import MenuOption from "./MenuOption"
import { MyPosts, Settings, Sun, Support } from "../icons"
import { useEffect } from "react"

const Separator = () => {
  return <div className="h-px bg-slate-200 dark:bg-neutral-800" />
}

const ProfileMenu = () => {
  const { profileOpened, setProfileMenu } = useProfileMenu()
  const { user } = useUser()

  const handleClickOutside = () => setProfileMenu(false)
  const closeMenu = () => setProfileMenu(false)

  const resetStorage = (theme: string) => {
    localStorage.removeItem("theme")
    localStorage.setItem("theme", theme)
  }

  const toggleTheme = () => {
    if (localStorage.theme === "light") {
      resetStorage("dark")
      document.documentElement.classList.add("dark")
      return
    }

    if (localStorage.theme === "dark") {
      resetStorage("light")
      document.documentElement.classList.remove("dark")
      return
    }
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light")
    }

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <>
      <div
        onClick={handleClickOutside}
        className={twMerge(
          "fixed sm:absolute w-full h-screen bottom-0 sm:bottom-auto top-0 left-0 transition-colors",
          profileOpened
            ? "pointer-events-auto bg-slate-950/50 sm:bg-slate-950/0 z-40"
            : "pointer-events-none"
        )}
      />
      <div
        className={twMerge(
          "fixed sm:absolute max-container left-1/2 -translate-x-1/2 z-50 flex justify-end px-4 transition-all",
          profileOpened
            ? "bottom-4 sm:bottom-auto sm:top-[72px]"
            : "-bottom-full sm:hidden"
        )}
      >
        <div onClick={handleClickOutside} className="hidden sm:block w-full" />
        <div className="w-full sm:w-[360px] sm:max-w-72 bg-white rounded-lg overflow-hidden border-b border border-gray-200 flex flex-col gap-2 py-2 dark:bg-neutral-900 dark:border-neutral-800">
          <UserOption />
          <MenuOption
            icon={<Sun />}
            label="Change mode"
            onClick={toggleTheme}
          />
          <Separator />
          <PremiumOption />
          <Separator />
          <MenuOption
            icon={<MyPosts />}
            label="My posts"
            asLink
            href={`/user/${user?._id}#posts`}
            onClick={closeMenu}
          />
          <MenuOption
            icon={<Settings />}
            label="Settings"
            asLink
            href="/settings"
            onClick={closeMenu}
          />
          <Separator />
          <MenuOption
            icon={<Support />}
            label="Support and feedback"
            asLink
            href="/support"
            onClick={closeMenu}
          />
          <LogoutOption />
        </div>
      </div>
    </>
  )
}

export default ProfileMenu
