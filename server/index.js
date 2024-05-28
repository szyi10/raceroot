const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
require("dotenv").config()

const { MONGODB_URL, PORT, database_password } = process.env
const DB = MONGODB_URL.replace("<database_password>", database_password)

const authRoute = require("./routes/AuthRoute")
const postRoute = require("./routes/PostRoute")
const commentRoute = require("./routes/CommentRoute")
const userRoute = require("./routes/UserRoute")

mongoose
  .connect(DB)
  .then(() => console.log("MongoDB is connected successfully!"))
  .catch((err) => console.error(err))

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
)

app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)
app.use("/api/user", userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
