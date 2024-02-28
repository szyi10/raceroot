import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import Panel from "./Panel"

import { avatar1 } from "../../../assets/images"
import { youtube, twitter, discord } from "../../../assets/icons"

const FeedAside = () => {
  const [trendingPosts, setTrendingPosts] = useState(null)
  const [newPeople, setNewPeople] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios({
        method: "GET",
        url: "http://127.0.0.1:3000/api/v1/posts?limit=3",
        withCredentials: true,
      })

      if (res.data.status === "success") {
        setTrendingPosts(res.data.data.data)
      }
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios({
        method: "GET",
        url: "http://127.0.0.1:3000/api/v1/users?limit=2",
        withCredentials: true,
      })

      if (res.data.status === "success") {
        setNewPeople(res.data.data.data)
      }
    }
    fetchUsers()
  }, [])

  return (
    <aside className="hidden xl:flex max-w-[348px] w-full sticky -top-[53%] flex-col gap-6">
      {trendingPosts !== null && (
        <Panel title="Trending Posts">
          <div className="flex flex-col gap-5 mb-1.5">
            {trendingPosts.map((post) => (
              <Link
                to={`/feed/post/${post.id}`}
                key={post.id}
                className="flex flex-col gap-1"
              >
                <h3 className="line-clamp-2 text-slate-700 font-semibold cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-sm text-slate-500 h-6 font-medium">
                  {!post.user.displayName
                    ? post.user.name
                    : post.user.displayName}
                </p>
              </Link>
            ))}
          </div>
        </Panel>
      )}
      {newPeople !== null && (
        <Panel title="Meet new people">
          <div className="flex flex-col gap-5 mb-1.5">
            {newPeople.map((user) => (
              <div key={user._id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-red-400 rounded-full">
                    <img src={avatar1} className="w-10 h-10 rounded-full" />
                  </div>
                  <p className="font-medium">
                    {!user.displayName ? user.name : user.displayName}
                  </p>
                </div>
                <Link
                  to={`/user/${user._id}`}
                  className="button border border-blue-600 text-blue-600 font-semibold hover:bg-slate-100"
                >
                  Visit
                </Link>
              </div>
            ))}
          </div>
        </Panel>
      )}
      <Panel className="bg-blue-600 border-blue-600 text-white">
        <h2 className="font-semibold text-xl">Become a journalist!</h2>
        <p className="text-slate-200">
          Join our journalist team and write news for us.
        </p>
        <button className="button bg-white text-slate-900 flex justify-center mt-2 text-base hover:bg-slate-200">
          Apply
        </button>
      </Panel>
      <Panel className="border-slate-200 bg-slate-200">
        <h3 className="text-slate-700 font-medium">Connect with us</h3>
        <div className="flex items-center gap-4">
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6"
          >
            <img src={discord} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="w-5 h-5"
          >
            <img src={twitter} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="w-6 h-6"
          >
            <img src={youtube} />
          </a>
        </div>
      </Panel>
    </aside>
  )
}

export default FeedAside
