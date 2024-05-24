import { twMerge } from "tailwind-merge"
import { useProfileMenu } from "../../../hooks"
import UserOption from "./UserOption"
import PremiumOption from "./PremiumOption"
import LogoutOption from "./LogoutOption"
import MenuOption from "./MenuOption"
import { Messages, MyPosts, Settings, Support } from "../icons"

const Separator = () => {
  return <div className="h-px bg-slate-200 dark:bg-neutral-800" />
}

const ProfileMenu = () => {
  const { profileOpened, setProfileMenu } = useProfileMenu()

  const handleClickOutside = () => setProfileMenu(false)
  const closeMenu = () => setProfileMenu(false)

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
          {/* TODO: make onClick function and add new icon */}
          <MenuOption icon={<Settings />} label="Dark mode" />
          <Separator />
          <PremiumOption />
          <Separator />
          <MenuOption
            icon={<MyPosts />}
            label="My posts"
            asLink
            href="/user/<id>#posts"
            onClick={closeMenu}
          />
          <MenuOption
            icon={<Messages />}
            label="Messages"
            asLink
            href="/messages"
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
