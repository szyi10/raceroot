import { useContext } from "react"
import { Link } from "react-router-dom"
import { twMerge } from "tailwind-merge"

import UserContext from "../context/user-context"
import UIContext from "../context/ui-context"

import {
  pen,
  myPosts,
  messages,
  logout,
  settings,
  support,
} from "../assets/icons"
import { avatar1 } from "../assets/images"

const Button = ({ href, icon, label, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={href}
      className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2"
    >
      <div className="flex items-center gap-2">
        <div className="hidden sm:block">
          <img src={icon} alt={label} width={20} height={20} />
        </div>
        <div className="sm:hidden block">
          <img src={icon} alt={label} width={24} height={24} />
        </div>
        <p className="truncate text-slate-600 sm:text-sm">{label}</p>
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

  const { name, displayName, _id } = userCtx.user.data

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
        <div className="w-full sm:w-max sm:max-w-72 bg-white rounded-lg overflow-hidden border-b border border-gray-200 flex flex-col gap-2 py-2">
          <Link
            onClick={close}
            to={`/user/${_id}`}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4"
          >
            <div className="flex gap-3">
              <div className="aspect-square object-cover rounded-full cursor-pointer w-12 h-12 bg-sky-300 flex items-center justify-center overflow-hidden">
                <img src={avatar1} width={48} height={48} />
              </div>
              <div className="flex flex-col flex-1 min-w-0 justify-between items-center">
                <p className="w-full text-base truncate font-bold text-slate-700">
                  {displayName ? displayName : name}
                </p>
                <p className="text-sm font-medium truncate text-slate-500 w-full">
                  @{name}
                </p>
              </div>
            </div>
          </Link>

          <div className="h-px bg-slate-200" />

          <Link
            to={"/become-a-journalist"}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2"
          >
            <div className="hidden sm:block mt-[0.5px] w-8 h-8">
              <img src={pen} alt="Pen icon" width={20} height={20} />
            </div>
            <div className="space-y-1">
              <p className="flex-1 text-base sm:text-sm font-semibold text-blue-600">
                Become a journalist
              </p>
              <p className="text-base sm:text-sm text-slate-600">
                Join our journalist team and write news for us.
              </p>
            </div>
          </Link>

          <div className="h-px bg-slate-200" />

          <Button
            href={`/user/${_id}#posts`}
            onClick={close}
            icon={myPosts}
            label="My Posts"
          />
          <Button
            href={`/messages`}
            onClick={close}
            icon={messages}
            label="Messages"
          />
          <Button
            href={`/settings`}
            onClick={close}
            icon={settings}
            label="Settings"
          />

          <div className="h-px bg-slate-200" />

          <Button
            href={`/support-and-feedback`}
            icon={support}
            label="Support and feedback"
          />
          <button
            onClick={userCtx.logout}
            className="w-full focus:outline-none focus:bg-slate-100 hover:bg-slate-100 py-2 px-4 flex gap-2"
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
