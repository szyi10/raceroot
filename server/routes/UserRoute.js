const { getUser, updateUser } = require("../controllers/UserController")
const router = require("express").Router()

router.get("/:id", getUser)
router.patch("/:id", updateUser)

module.exports = router
