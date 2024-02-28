import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

import { bottomNavLinks } from "../../config/constants"

import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [currentPath, setCurrentPath] = useState()
  const location = useLocation()

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

  useEffect(() => {
    const currentLink = bottomNavLinks.filter(
      (link) => link.href === location.pathname
    )[0]
    currentLink.active = true
    setCurrentPath(currentLink)
  }, [])

  if (!posts) return <p className="font-medium">No posts found.</p>
  if (!currentPath) return

  return (
    <section className="max-w-[728px] w-full flex flex-col gap-6 mx-auto">
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
      <nav className="md:hidden fixed left-0 bottom-0 flex justify-around items-center w-full border-t bg-white py-2 z-40">
        {bottomNavLinks.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            href="#"
            className="w-10 h-10 flex items-center justify-center"
          >
            <img
              src={
                currentPath.href === link.href ? link.activeImage : link.image
              }
              alt={link.label}
              width={24}
              height={24}
            />
          </a>
        ))}
      </nav>
    </section>
  )
}

export default Posts
