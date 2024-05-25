const Post = require("../models/PostModel")

module.exports.getAllPosts = async (req, res, next) => {
  try {
    const { limit, sort } = req.query
    let query = Post.find().populate("likedBy", "username")

    if (sort) {
      query = query.sort({ [sort]: -1 })
    }

    if (limit) {
      query = query.limit(parseInt(limit))
    }

    const posts = await query.exec()
    res.json(posts)
  } catch (error) {
    console.error(error)
  }
}

module.exports.createPost = async (req, res, next) => {
  try {
    const { title, text, likes, createdAt, user } = req.body
    const post = await Post.create({ title, text, likes, createdAt, user })

    res
      .status(201)
      .json({ message: "Post created successfully", success: true, post })

    next()
  } catch (error) {
    console.error(error)
  }
}

module.exports.likePost = async (req, res, next) => {
  try {
    const userId = req.body.user
    const post = await Post.findById(req.params.id)

    if (!post.likedBy.includes(userId)) {
      post.likes += 1
      post.likedBy.push(userId)
      const updatedPost = await post.save()
      res.json(updatedPost)
    } else {
      res.status(400).json({ message: "You have already liked this post" })
    }
  } catch (error) {
    console.error(error)
  }
}
