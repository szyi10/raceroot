const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "Comment can not be empty!"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    post: {
      type: mongoose.Schema.ObjectId,
      ref: "Post",
      required: [true, "Comment must belong to a post."],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Comment must belong to a user."],
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
)

commentSchema.index({ tour: 1, user: 1 })

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name displayName",
  })
  next()
})

const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment
