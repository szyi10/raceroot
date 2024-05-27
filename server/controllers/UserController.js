const User = require("../models/UserModel")

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(400).json({ message: "Failed to fetch user" })
  }
}
