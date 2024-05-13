import { Outlet, Navigate } from "react-router-dom"

const PrivateRoutes = ({ isLoggedIn }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to="/auth" />
}

export default PrivateRoutes
