const mongoose = require("mongoose")
const dotenv = require("dotenv")

process.on("uncaughtException", (err) => {
  console.log("❌ ERROR: Uncaught exception! Shutting down...")
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config({ path: "./config.env" })
const app = require("./app")

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB)
  .then(() => console.log("✅ SUCCESS: DB connection succesful!"))

const port = process.env.PORT || 8000
const server = app.listen(port, () => {
  console.log(`✅ SUCCESS: App running on port ${port}`)
})

process.on("unhandledRejection", (err) => {
  console.log("❌ ERROR: Unhandled rejection! Shutting down...")
  console.log(err.name, err.message)

  server.close(() => {
    process.exit(1)
  })
})
