const User = require("../models/UserModel")
const Post = require("../models/PostModel")

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select("-password")
    if (!user) {
      return res.status(400).json({ message: "User not found" })
    }

    // Find all posts by user
    const posts = await Post.find({ user: req.params.id })

    const userData = {
      ...user.toObject(),
      posts,
    }

    res.json(userData)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Failed to fetch user" })
  }
}
