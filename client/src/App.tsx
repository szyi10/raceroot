import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import {
  Login,
  Signup,
  Home,
  Feed,
  NotFound,
  Post,
  Profile,
  NewPost,
} from "./pages"
import { Spinner } from "./components/layout"

const App = () => {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/create" element={<NewPost />} />
          <Route path="/user/:userId" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
