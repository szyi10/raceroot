import { useState, useEffect } from "react"
import { night } from "../assets/icons"

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // const isDarkMode = localStorage.getItem("darkMode") === "true"
    // setDarkMode(isDarkMode)
    if (localStorage.getItem("darkMode") === "true") setDarkMode(true)

    setDarkMode(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", darkMode)
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
  }

  return (
    <button className="button-icon" onClick={toggleDarkMode}>
      <img src={night} alt="Search icon" width={24} height={24} />
    </button>
  )
}

export default ThemeSwitcher
