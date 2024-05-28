import { useState, createContext, ReactNode } from "react"

type ContextProps = {
  profileOpened: boolean
  setProfile: (state: boolean) => void
}

const UIContext = createContext<ContextProps>({
  profileOpened: false,
  setProfile: () => {},
})

export const UIContextProvider = ({ children }: { children: ReactNode }) => {
  const [profileOpened, setProfileOpened] = useState(false)

  const setProfile = (state: boolean) => setProfileOpened(state)

  const contextValue = { profileOpened, setProfile }

  return (
    <UIContext.Provider value={contextValue}>{children}</UIContext.Provider>
  )
}

export default UIContext
