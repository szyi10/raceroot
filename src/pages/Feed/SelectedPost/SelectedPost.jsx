import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import Post from "./Post"
import PostAside from "./PostAside"
import Loading from "../../../components/Loading"
import { toast } from "react-toastify"

const SelectedPost = () => {
  const [post, setPost] = useState(null)

  const { pathname } = useLocation()
  const postId = pathname.replace("/feed/post/", "")

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `http://127.0.0.1:3000/api/v1/posts/${postId}`,
        })

        setPost(res.data.data.data)
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
      }
    }
    fetchPost()
  }, [postId])

  if (!post) return <Loading />

  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <Post data={post} />
      <PostAside data={post.user} />
    </main>
  )
}

export default SelectedPost
