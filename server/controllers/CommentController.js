const Comment = require("../models/CommentModel")
const Post = require("../models/PostModel")

exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment.find({ post: req.params.postId })
    res.json(comments)
  } catch (error) {
    console.error(error)
  }
}

exports.createComment = async (req, res) => {
  try {
    const postId = req.params.postId
    const { text, userId } = req.body

    const comment = await Comment.create({ text, post: postId, user: userId })

    const post = await Post.findById(postId)
    post.comments.push(comment._id)
    await post.save()

    res
      .status(201)
      .json({ message: "Comment created successfully", success: true, comment })
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Failed to create comment" })
  }
}
