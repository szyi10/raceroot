import { useContext } from "react"
import UIContext from "../context/UIContext"

const useProfileMenu = () => {
  const { profileOpened, setProfile } = useContext(UIContext)

  const setProfileMenu = (state: boolean) => setProfile(state)

  return { profileOpened, setProfileMenu }
}

export default useProfileMenu
