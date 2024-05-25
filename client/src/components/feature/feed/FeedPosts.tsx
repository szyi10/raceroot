import { useState, useEffect } from "react"
import { fetchPosts } from "../../../lib/api"
import FeedPost from "./FeedPost"
import { Post } from "../../../types"

// TODO: Add BottomNav

const FeedPosts = () => {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    fetchPosts()
      .then((data) => setPosts(data))
      .catch(() => console.log("Failed to fetch posts"))
  }, [])

  if (!posts) {
    return <p className="font-mediumtext-slate-500">No posts found.</p>
  }

  return (
    <section className="max-w-[728px] w-full flex flex-col gap-6 mx-auto">
      {posts.map((post) => (
        <FeedPost key={post.id} data={post} />
      ))}
    </section>
  )
}

export default FeedPosts
