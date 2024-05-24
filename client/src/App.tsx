import { Route, Routes } from "react-router-dom"
import { Login, Signup, Home, Feed } from "./pages"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  )
}

export default App
