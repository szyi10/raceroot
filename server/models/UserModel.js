const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  bio: {
    type: String,
  },
  nickname: {
    type: String,
  },
  photo: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

userSchema.pre("save", async function () {
  if (!this.nickname) {
    this.nickname = this.username
  }

  this.password = await bcrypt.hash(this.password, 12)
})

module.exports = mongoose.model("User", userSchema)
