import { Link, useLocation } from "react-router-dom"
import { Feed, Notifications, Search, Sidebar } from "./icons/BottomNav"

const BottomNav = () => {
  const { pathname } = useLocation()

  return (
    <nav className="md:hidden fixed left-0 bottom-0 flex justify-around items-center w-full border-t bg-white dark:bg-neutral-900 dark:border-neutral-800 py-2 z-40">
      <Link to="/feed" className="w-10 h-10 flex items-center justify-center">
        <Feed active={pathname === "/feed" ? true : false} />
      </Link>
      <Link to="/search" className="w-10 h-10 flex items-center justify-center">
        <Search active={pathname === "/search" ? true : false} />
      </Link>
      <Link
        to="/messages"
        className="w-10 h-10 flex items-center justify-center"
      >
        <Notifications active={pathname === "/messages" ? true : false} />
      </Link>
      <Link to="/aside" className="w-10 h-10 flex items-center justify-center">
        <Sidebar active={pathname === "/aside" ? true : false} />
      </Link>
    </nav>
  )
}

export default BottomNav
