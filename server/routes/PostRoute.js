const {
  getAllPosts,
  createPost,
  likePost,
  getPost,
} = require("../controllers/PostController")
const router = require("express").Router()

router.get("/", getAllPosts)
router.post("/", createPost)
router.get("/:id", getPost)
router.patch("/:id/like", likePost)

module.exports = router
