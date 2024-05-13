import { useState, createContext } from "react"

const UIContext = createContext({
  menuOpened: false,
  popperOpened: false,
  setMenu: () => {},
  setPopper: () => {},
})

export const UIContextProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [popperOpened, setPopperOpened] = useState(false)

  const setMenu = (state) => {
    setMenuOpened(state)
  }

  const setPopper = (state) => {
    setPopperOpened(state)
  }

  const contextValue = {
    menuOpened,
    popperOpened,
    setMenu,
    setPopper,
  }

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  )
}

export default UIContext
