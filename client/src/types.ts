export interface User {
  _id: string
  username: string
  photo: string
  role: "user" | "admin"
  bio: string
}

export interface Post {
  _id: string
  id: string
  comments: []
  createdAt: Date
  likedBy: []
  likes: number
  text: string
  title: string
  user: User
}

export interface Comment {
  _id: string
  id: string
  text: string
  post: string
  user: User
  createdAt: Date
}
