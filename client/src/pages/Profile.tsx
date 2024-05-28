import { useEffect, useState } from "react"
import GlobalStyle from "../components/GlobalStyle"
import type { Profile } from "../types"
import { fetchUserProfile } from "../lib/api"
import { useLocation } from "react-router-dom"
import { Spinner } from "../components/layout"
import {
  ProfileInfo,
  ProfilePosts,
  ProfileSocials,
} from "../components/feature"

const Profile = () => {
  const [user, setUser] = useState<Profile | null>(null)
  const { pathname } = useLocation()
  const userId = pathname.replace("/user/", "")

  useEffect(() => {
    fetchUserProfile(userId)
      .then((data) => setUser(data))
      .catch(() => console.log("Failed to fetch user"))
  }, [userId])

  if (!user) {
    return <Spinner />
  }

  return (
    <GlobalStyle>
      <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
        <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto sm:p-8 md:border md:border-gray-200 dark:border-neutral-800 md:rounded-lg">
          <ProfileInfo user={user} />
          <ProfileSocials user={user} />
          <ProfilePosts posts={user.posts} />
        </div>
      </main>
    </GlobalStyle>
  )
}

export default Profile
