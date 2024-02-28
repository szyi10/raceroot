import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { avatar1 } from "../assets/images"

import Post from "./Feed/Post"
import Write from "../components/icons/Write"

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState(null)
  const params = useParams()
  const userId = params.id

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `https://raceroot-node-server-b708fd8ea8ce.herokuapp.com/api/v1/users/${userId}`,
          withCredentials: true,
        })

        if (res.data.status === "success") {
          setUser(res.data.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUser()
  }, [userId])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `http://127.0.0.1:3000/api/v1/posts?user[_id]=${userId}`,
          withCredentials: true,
        })

        if (res.data.status === "success") {
          setPosts(res.data.data.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
  }, [userId])

  if (!user) return
  const formattedDate = new Date(user.createdAt).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  if (!posts) return

  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <div className="max-w-4xl w-full flex flex-col gap-6 mx-auto sm:p-8 md:border md:border-gray-200 md:rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-start justify-between">
            <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-slate-100 overflow-hidden">
              <img src={avatar1} />
            </div>
            <Link
              to="/settings"
              className="md:hidden button-icon sm:button-primary text-base flex items-center gap-1"
            >
              <Write />
              <span className="hidden sm:block">Edit Profile</span>
            </Link>
          </div>
          <div className="flex justify-between items-start flex-1 pt-4 md:pt-0 md:pl-10">
            <div>
              <h2 className="font-bold text-3xl text-slate-700">
                {!user.displayName ? user.name : user.displayName}
              </h2>
              <span className="text-sm text-slate-500 font-medium">
                @{user.name}
              </span>
              <p className="mt-3 text-slate-600">{!user.bio ? "" : user.bio}</p>
            </div>
            <Link
              to="/settings"
              className="hidden button-primary text-base min-w-32 md:flex justify-center"
            >
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="w-full border border-gray-200 rounded-lg py-2 sm:py-4 px-3 sm:px-6 flex items-center justify-center">
          <div>{/* social links */}</div>
          <div className="flex items-center gap-1">
            <p className="text-sm sm:text-base text-slate-500">
              Member Since {formattedDate}
            </p>
          </div>
        </div>
        <div id="posts">
          <h3 className="mb-5 text-xl font-bold text-slate-900">User posts:</h3>

          {posts.length === 0 && (
            <p className="text-slate-500 text-sm font-medium">
              This user never posted.
            </p>
          )}
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <Post key={post.id} data={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default UserProfile
