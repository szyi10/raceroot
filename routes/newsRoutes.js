const express = require("express")
const newsController = require("./../controllers/newsController")
const authController = require("./../controllers/authController")

const router = express.Router()

router
  .route("/")
  .get(newsController.getAllNews)
  .post(
    authController.protect,
    authController.restrictTo("journalist"),
    newsController.createNews
  )

router.get("/:id", newsController.getNews)

module.exports = router
