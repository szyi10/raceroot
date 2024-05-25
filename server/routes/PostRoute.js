const {
  getAllPosts,
  createPost,
  likePost,
} = require("../controllers/PostController")
const router = require("express").Router()

router.get("/", getAllPosts)
router.post("/", createPost)
router.patch("/:id/like", likePost)

module.exports = router
