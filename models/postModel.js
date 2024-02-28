const mongoose = require("mongoose")

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A post must have a title"],
    },
    text: {
      type: String,
      required: [true, "A post must have a text"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    likes: {
      type: Number,
      default: 0,
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

postSchema.virtual("comments", {
  ref: "Comment",
  foreignField: "post",
  localField: "_id",
})

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name displayName",
  })
  next()
})

const Post = mongoose.model("Post", postSchema)

module.exports = Post
