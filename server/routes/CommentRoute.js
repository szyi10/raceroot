const {
  getComments,
  createComment,
} = require("../controllers/CommentController")
const router = require("express").Router()

router.get("/:postId", getComments)
router.post("/:postId", createComment)

module.exports = router
