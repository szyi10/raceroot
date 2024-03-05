import { useContext } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import UserContext from "../context/user-context"
import UIContext from "../context/ui-context"

import { MyPosts, Messages, Settings, Support } from "./icons"
import { pen, logout } from "../assets/icons"

const Button = ({ href, icon, label, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={href}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
    >
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
    </Link>
  )
}

const ProfilePopper = () => {
  const userCtx = useContext(UserContext)
  const uiCtx = useContext(UIContext)

  const handleClickOutside = () => {
    uiCtx.setPopper(false)
  }

  const close = () => uiCtx.setPopper(false)

  if (!userCtx.user) return

  const { name, displayName, _id, photo } = userCtx.user.data

  return (
    <>
      <div
        onClick={handleClickOutside}
        className={twMerge(
          "fixed sm:absolute w-full h-screen bottom-0 sm:bottom-auto top-0 left-0 transition-colors",
          uiCtx.popperOpened
            ? "pointer-events-auto bg-slate-950/50 sm:bg-slate-950/0 z-40"
            : "pointer-events-none"
        )}
      />
      <div
        className={twMerge(
          "fixed sm:absolute max-container left-1/2 -translate-x-1/2 z-50 flex justify-end px-4 transition-all",
          uiCtx.popperOpened
            ? "bottom-4 sm:bottom-auto sm:top-[72px]"
            : "-bottom-full sm:hidden"
        )}
      >
        <div onClick={handleClickOutside} className="hidden sm:block w-full" />
        <div className="w-full sm:w-max sm:max-w-72 bg-white rounded-lg overflow-hidden border-b border border-gray-200 flex flex-col gap-2 py-2 dark:bg-neutral-900 dark:border-neutral-800">
          <Link
            onClick={close}
            to={`/user/${_id}`}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
          >
            <div className="flex gap-3">
              <div className="aspect-square object-cover rounded-full cursor-pointer w-12 h-12 flex items-center justify-center overflow-hidden">
                <img
                  src={`${
                    import.meta.env.VITE_DATABASE_URL
                  }/img/users/${photo}`}
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col flex-1 min-w-0 justify-between items-center">
                <p className="w-full text-base truncate font-bold text-slate-700 dark:text-slate-200">
                  {displayName ? displayName : name}
                </p>
                <p className="text-sm font-medium truncate text-slate-500 w-full dark:text-slate-400">
                  @{name}
                </p>
              </div>
            </div>
          </Link>

          <div className="h-px bg-slate-200 dark:bg-neutral-800" />

          <Link
            to={"/become-a-journalist"}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
          >
            <div className="hidden sm:block mt-[0.5px] w-8 h-8">
              <img src={pen} alt="Pen icon" width={20} height={20} />
            </div>
            <div className="space-y-1">
              <p className="flex-1 text-base sm:text-sm font-semibold text-blue-600">
                Become a journalist
              </p>
              <p className="text-base sm:text-sm text-slate-600 dark:text-slate-400">
                Join our journalist team and write news for us.
              </p>
            </div>
          </Link>

          <div className="h-px bg-slate-200 dark:bg-neutral-800" />

          <Button
            href={`/user/${_id}#posts`}
            onClick={close}
            icon={<MyPosts />}
            label="My Posts"
          />
          <Button
            href={`/messages`}
            onClick={close}
            icon={<Messages />}
            label="Messages"
          />
          <Button
            href={`/settings`}
            onClick={close}
            icon={<Settings />}
            label="Settings"
          />

          <div className="h-px bg-slate-200 dark:bg-neutral-800" />

          <Button
            href={`/support-and-feedback`}
            icon={<Support />}
            label="Support and feedback"
          />
          <button
            onClick={userCtx.logout}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
          >
            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <img src={logout} alt="Pen icon" width={20} height={20} />
              </div>
              <div className="sm:hidden block">
                <img src={logout} alt="Pen icon" width={24} height={24} />
              </div>
              <p className="truncate text-orange-600 sm:text-sm">Log out</p>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfilePopper
