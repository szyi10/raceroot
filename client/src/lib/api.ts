import axios from "axios"
import { Post } from "../types"

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
