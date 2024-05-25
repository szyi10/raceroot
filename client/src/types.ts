export interface User {
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
