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

module.exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.json(user)
  } catch (error) {
    console.error(SyntaxError)
    res.status(400).json({ message: "Failed to fetch user" })
  }
}
