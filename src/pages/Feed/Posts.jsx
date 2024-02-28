import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

import { avatar1, avatar2 } from "../../assets/images"
import { bottomNavLinks } from "../../config/constants"

import Post from "./Post"

const DUMMY_POSTS = [
  {
    id: 1,
    title: "Hamilton joining Ferrari?",
    text: `Yo, racing fam! 🚗💨 Did you hear the tea? Lewis Hamilton is ditching Mercedes and jumping into a Ferrari! 🤯 What even is life right now?! 
    
    Seven-time champ going from silver arrows to Ferrari red? 🤔 Mind blown! 🤯 Can you imagine that beast on the track? 🏁🔊 
    
    The pit lane gossip is insane! Is Ferrari gonna be the new dream team? 🤩 Or is it gonna be a hot mess? 🙈 I need all the deets, fam! 💬🕵️
    
    Buckle up, peeps! This ain't your average driver swap; it's a whole new era in F1! 🌟 Get ready for some wild races and even wilder drama! 🍿🎉`,
    user: {
      avatar: avatar1,
    },
  },
  {
    id: 2,
    title: "What is the best livery so far?",
    text: `After today's ferrari reaval what's you favourite livery so far?`,
    user: {
      avatar: avatar2,
    },
  },
]

const Posts = () => {
  const [posts, setPosts] = useState(null)
  const [currentPath, setCurrentPath] = useState()
  const location = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "http://127.0.0.1:3000/api/v1/posts",
        })

        setPosts(res.data.data.data)
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
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
