const { getUser } = require("../controllers/UserController")
const router = require("express").Router()

router.get("/:id", getUser)

module.exports = router
