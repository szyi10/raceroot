import { useEffect } from "react"
import Moon from "./icons/Moon"

const ThemeSwitcher = () => {
  const resetStorage = (theme) => {
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
    <button className="button-icon" onClick={toggleTheme}>
      <div className="h-6 w-6">
        <Moon />
      </div>
    </button>
  )
}

export default ThemeSwitcher
