import axios from "axios"
import { Comment, Post } from "../types"

const API_URL = "http://localhost:4000/api"

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const res = await axios({
      method: "GET",
      url: `${API_URL}/posts`,
    })

    if (res.status === 200) {
      return res.data
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchTrendingPosts = async (): Promise<Post[]> => {
  try {
    const res = await axios({
      method: "GET",
      url: `${API_URL}/posts?limit=3&sort=likes`,
    })

    if (res.status === 200) {
      return res.data
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export const getPost = async (postId: string): Promise<Post | null> => {
  try {
    const res = await axios({
      method: "GET",
      url: `${API_URL}/posts/${postId}`,
    })

    if (res.status === 200) {
      return res.data
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}

export const likePost = async (postId: string, userId: string) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: `${API_URL}/posts/${postId}/like`,
      data: {
        user: userId,
      },
    })

    if (res.status === 200) {
      console.log("Post liked")
    }
  } catch (error) {
    console.log(error)
  }
}

export const getComments = async (postId: string): Promise<Comment[]> => {
  try {
    const res = await axios({
      method: "GET",
      url: `${API_URL}/comments/${postId}`,
    })

    if (res.status === 200) {
      return res.data
    } else {
      return []
    }
  } catch (error) {
    console.log(error)
    return []
  }
}

export const createComment = async (
  postId: string,
  text: string,
  userId: string
) => {
  try {
    const res = await axios({
      method: "POST",
      url: `${API_URL}/comments/${postId}`,
      data: { text, userId },
    })

    if (res.status === 201) {
      console.log("Comment created")
    }
  } catch (error) {
    console.log(error)
  }
}