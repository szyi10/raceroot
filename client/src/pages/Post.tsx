import { useEffect, useState } from "react"
import GlobalStyle from "../components/GlobalStyle"
import type { Post } from "../types"
import { useLocation } from "react-router-dom"
import { getPost } from "../lib/api"
import { PostAside, SelectedPost } from "../components/feature"
import { Spinner } from "../components/layout"

const Post = () => {
  const [post, setPost] = useState<Post | null>(null)
  const { pathname } = useLocation()
  const postId = pathname.replace("/post/", "")

  useEffect(() => {
    getPost(postId)
      .then((data) => setPost(data))
      .catch(() => console.log("Failed to fetch posts"))
  }, [postId])

  if (!post) {
    return <Spinner />
  }

  return (
    <GlobalStyle>
      <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
        <SelectedPost data={post} />
        <PostAside data={post.user} />
      </main>
    </GlobalStyle>
  )
}

export default Post
