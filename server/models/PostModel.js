const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required."],
    },
    text: {
      type: String,
      required: [true, "Post text cannont be empty."],
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Comment",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Post must belong to a user."],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

postSchema.index({ likes: -1 })

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "username photo nickname",
  }).populate({
    path: "comments",
    select: "text user",
    populate: {
      path: "user",
      select: "username photo nickname",
    },
  })
  next()
})

module.exports = mongoose.model("Post", postSchema)
