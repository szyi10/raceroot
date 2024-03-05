const multer = require("multer")
const sharp = require("sharp")
const User = require("./../models/userModel")
const catchAsync = require("./../utils/catchAsync")
const AppError = require("./../utils/appError")
const factory = require("./handlerFactory")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users")
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1]
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`)
  },
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({ storage, fileFilter })

exports.uploadUserPhoto = upload.single("photo")

const filterObj = (obj, ...allowedFields) => {
  const newObj = {}
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el]
  })
  return newObj
}

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id
  next()
}

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword.",
        400
      )
    )
  }

  const filteredBody = filterObj(
    req.body,
    "name",
    "email",
    "bio",
    "displayName",
    "likedPosts"
  )
  if (req.file) {
    // console.log(req.file)
    filteredBody.photo = req.file.filename
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    status: "success",
    data: {
      user: updatedUser,
    },
  })
})

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user.id, { active: false })

  res.status(204).json({
    status: "success",
    data: null,
  })
})

exports.createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not defined! Please use /signup instead",
  })
}

exports.getUser = factory.getOne(User)
exports.getAllUsers = factory.getAll(User)

exports.updateUser = factory.updateOne(User)
exports.deleteUser = factory.deleteOne(User)
