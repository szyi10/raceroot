const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const app = express()
require("dotenv").config()

const { MONGODB_URL, PORT, database_password } = process.env
const DB = MONGODB_URL.replace("<database_password>", database_password)

const authRoute = require("./routes/AuthRoute")

mongoose
  .connect(DB)
  .then(() => console.log("MongoDB is connected successfully!"))
  .catch((err) => console.error(err))

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.use(cookieParser())

app.use(express.json())

app.use("/", authRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
