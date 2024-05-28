const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Comment can't be empty"],
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
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "username photo nickname",
  })
  next()
})

// commentSchema.index({ post: 1, user: 1 })

module.exports = mongoose.model("Comment", commentSchema)
