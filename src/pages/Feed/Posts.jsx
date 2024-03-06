import { useState, useEffect } from "react"
import axios from "axios"

import Post from "./Post"
import BottomNav from "../../components/BottomNav"

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/posts`,
        })

        setPosts(res.data.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }, [])

  if (!posts)
    return <p className="font-mediumtext-slate-500">No posts found.</p>

  return (
    <section className="max-w-[728px] w-full flex flex-col gap-6 mx-auto">
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
      <BottomNav />
    </section>
  )
}

export default Posts
