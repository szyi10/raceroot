const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A news must have a title"],
    },
    subtitle: {
      type: String,
      required: [true, "A news must have a subtitle"],
    },
    text: {
      type: String,
      required: [true, "A news must have a text"],
    },
    img: {
      type: String,
      required: [true, "A news must have a image"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    minutesToRead: {
      type: Number,
      default: 5,
    },
    isBigNews: {
      type: Boolean,
      default: false,
    },
    journalist: {
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

// newsSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "user",
//     select: "name displayName",
//   })
//   next()
// })

const News = mongoose.model("News", newsSchema)

module.exports = News
