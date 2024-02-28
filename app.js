const express = require("express")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const mongoSanitize = require("express-mongo-sanitize")
const xss = require("xss-clean")
const hpp = require("hpp")
const cors = require("cors")
const cookieParser = require("cookie-parser")

const AppError = require("./utils/appError")
const globalErrorHandler = require("./controllers/errorController")
const userRouter = require("./routes/userRoutes")
const postRouter = require("./routes/postRoutes")
const commentRouter = require("./routes/commentRoutes")

const app = express()

const corsOptions = {
  origin: [
    "http://127.0.0.1:5173",
    "http://192.168.55.8:5173",
    "https://raceroot.vercel.app",
  ],
  credentials: true,
}

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
})

// MIDDLEWARES
app.use(cors(corsOptions))
app.use(helmet())
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}
app.use("/api", limiter)
app.use(express.json({ limit: "10kb" }))
app.use(cookieParser())
app.use(mongoSanitize())
app.use(xss())

app.use(
  hpp({
    whitelist: ["displayName", "bio"],
  })
)

app.use((req, res, next) => {
  console.log(req.cookies)
  next()
})

// ROUTES
app.use("/api/v1/users", userRouter)
app.use("/api/v1/posts", postRouter)
app.use("/api/v1/comments", commentRouter)

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404))
})

app.use(globalErrorHandler)

module.exports = app
