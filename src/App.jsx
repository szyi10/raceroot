import { lazy, Suspense, useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import UserContext from "./context/user-context"
import PrivateRoutes from "./utils/PrivateRoutes"

import { Loading, Navbar, MobileNav, Footer, ProfilePopper } from "./components"
const Home = lazy(() => import("./pages/HomePage"))
const Authentication = lazy(() =>
  import("./pages/Authentication/Authentication")
)
const Feed = lazy(() => import("./pages/Feed/Feed"))
const SelectedPost = lazy(() =>
  import("./pages/Feed/SelectedPost/SelectedPost")
)
const CreatePost = lazy(() => import("./pages/CreatePost"))
const UserProfile = lazy(() => import("./pages/UserProfile"))
const Settings = lazy(() => import("./pages/Settings"))
const News = lazy(() => import("./pages/News/News"))
const NotFound = lazy(() => import("./pages/NotFound"))

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const { isLoggedIn } = useContext(UserContext)

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <MobileNav />
        <Routes>
          <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/auth"
            element={isLoggedIn ? <Navigate to="/" /> : <Authentication />}
          />
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="/create" element={<CreatePost />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/post/:id" element={<SelectedPost />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ProfilePopper />
      </Suspense>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
    </>
  )
}

export default App
