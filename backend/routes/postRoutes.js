const express = require("express")
const postController = require("./../controllers/postController")
const authController = require("./../controllers/authController")
const commentRouter = require("./../routes/commentRoutes")

const router = express.Router()

router.use("/:postId/comments", commentRouter)

router
  .route("/")
  .get(postController.getAllPosts)
  .post(authController.protect, postController.createPost)

router.route("/:id").get(postController.getPost)

module.exports = router
